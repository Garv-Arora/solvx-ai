/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        heading: ["'Bricolage Grotesque'", "serif"],
                        condensed: ["'Bebas Neue'", "sans-serif"],
                        body: ["'DM Sans'", "sans-serif"],
                },
                colors: {
                        sx: {
                                bg: 'var(--sx-bg)',
                                surface: 'var(--sx-surface)',
                                'surface-hover': 'var(--sx-surface-hover)',
                                dark: 'var(--sx-dark)',
                                'dark-surface': 'var(--sx-dark-surface)',
                                text: 'var(--sx-text)',
                                'text-secondary': 'var(--sx-text-secondary)',
                                'text-muted': 'var(--sx-text-muted)',
                                'text-on-dark': 'var(--sx-text-on-dark)',
                                'text-on-dark-secondary': 'var(--sx-text-on-dark-secondary)',
                                'text-on-dark-muted': 'var(--sx-text-on-dark-muted)',
                                accent: 'var(--sx-accent)',
                                'accent-hover': 'var(--sx-accent-hover)',
                                'accent-soft': 'var(--sx-accent-soft)',
                                border: 'var(--sx-border)',
                                'border-hover': 'var(--sx-border-hover)',
                                'border-dark': 'var(--sx-border-dark)',
                                'border-dark-hover': 'var(--sx-border-dark-hover)',
                                'nav-bg': 'var(--sx-nav-bg)',
                                'nav-border': 'var(--sx-nav-border)',
                                'nav-text': 'var(--sx-nav-text)',
                                'nav-text-hover': 'var(--sx-nav-text-hover)',
                                'nav-active-bg': 'var(--sx-nav-active-bg)',
                                'nav-active-text': 'var(--sx-nav-active-text)',
                                'nav-logo': 'var(--sx-nav-logo)',
                        },
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
