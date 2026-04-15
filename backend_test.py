import requests
import sys
from datetime import datetime
import json

class SolveXAPITester:
    def __init__(self, base_url="https://automation-pitch-1.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            self.test_results.append({
                "test": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response": response.text[:200] if response.text else ""
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "test": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )
        return success

    def test_email_subscription(self, email):
        """Test email subscription"""
        success, response = self.run_test(
            "Email Subscription",
            "POST",
            "api/subscribe",
            200,
            data={"email": email}
        )
        return success, response

    def test_duplicate_email_subscription(self, email):
        """Test duplicate email subscription handling"""
        success, response = self.run_test(
            "Duplicate Email Subscription",
            "POST",
            "api/subscribe",
            200,
            data={"email": email}
        )
        return success, response

    def test_invalid_email_subscription(self):
        """Test invalid email subscription"""
        success, response = self.run_test(
            "Invalid Email Subscription",
            "POST",
            "api/subscribe",
            400,
            data={"email": "invalid-email"}
        )
        return success, response

    def test_get_subscribers(self):
        """Test getting subscribers list"""
        success, response = self.run_test(
            "Get Subscribers",
            "GET",
            "api/subscribers",
            200
        )
        return success, response

def main():
    # Setup
    tester = SolveXAPITester()
    test_email = f"test_{datetime.now().strftime('%Y%m%d_%H%M%S')}@example.com"

    print("🚀 Starting SolveX AI Landing Page API Tests")
    print("=" * 50)

    # Test 1: Root endpoint
    tester.test_root_endpoint()

    # Test 2: Email subscription with valid email
    success, response = tester.test_email_subscription(test_email)
    if success:
        print(f"✅ Email subscription successful for {test_email}")
    else:
        print(f"❌ Email subscription failed for {test_email}")

    # Test 3: Duplicate email subscription
    success, response = tester.test_duplicate_email_subscription(test_email)
    if success and "already subscribed" in response.get("message", "").lower():
        print("✅ Duplicate email handling works correctly")
    else:
        print("❌ Duplicate email handling may not be working correctly")

    # Test 4: Invalid email subscription
    tester.test_invalid_email_subscription()

    # Test 5: Get subscribers
    success, response = tester.test_get_subscribers()
    if success:
        subscriber_count = response.get("count", 0)
        print(f"✅ Retrieved {subscriber_count} subscribers")
    else:
        print("❌ Failed to retrieve subscribers")

    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All backend API tests passed!")
        return 0
    else:
        print("⚠️  Some backend API tests failed")
        print("\nFailed tests:")
        for result in tester.test_results:
            if not result["success"]:
                error_msg = result.get('error', f'Status {result.get("actual_status", "unknown")}')
                print(f"  - {result['test']}: {error_msg}")
        return 1

if __name__ == "__main__":
    sys.exit(main())