import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neutral: {
          50: "hsl(0 0% 98%)",
          100: "hsl(0 0% 96%)",
          200: "hsl(0 0% 92%)",
          300: "hsl(0 0% 86%)",
          400: "hsl(0 0% 64%)",
          500: "hsl(0 0% 45%)",
          600: "hsl(0 0% 32%)",
          700: "hsl(0 0% 25%)",
          800: "hsl(0 0% 15%)",
          900: "hsl(0 0% 5%)",
        },
        amber: {
          50: "hsl(36 100% 96%)",
          100: "hsl(36 100% 88%)",
          200: "hsl(36 100% 76%)",
          300: "hsl(38 92% 65%)",
          400: "hsl(38 92% 50%)",
          500: "hsl(38 92% 50%)",
          600: "hsl(32 95% 44%)",
          700: "hsl(26 90% 37%)",
          800: "hsl(22 82% 31%)",
          900: "hsl(18 74% 23%)",
        },
        stone: {
          50: "hsl(20 13% 96%)",
          100: "hsl(20 11% 94%)",
          200: "hsl(20 8% 88%)",
          300: "hsl(20 7% 80%)",
          400: "hsl(20 6% 62%)",
          500: "hsl(20 5% 50%)",
          600: "hsl(20 6% 40%)",
          700: "hsl(20 7% 28%)",
          800: "hsl(20 8% 16%)",
          900: "hsl(20 7% 8%)",
          950: "hsl(20 8% 4%)",
        },
        emerald: {
          50: "hsl(151 100% 96%)",
          100: "hsl(151 92% 91%)",
          200: "hsl(151 81% 81%)",
          300: "hsl(151 78% 65%)",
          400: "hsl(151 73% 51%)",
          500: "hsl(151 71% 44%)",
          600: "hsl(151 80% 35%)",
          700: "hsl(151 87% 27%)",
          800: "hsl(151 85% 22%)",
          900: "hsl(151 83% 16%)",
        },
        sage: {
          50: "hsl(138 31% 95%)",
          100: "hsl(138 28% 90%)",
          200: "hsl(138 26% 80%)",
          300: "hsl(138 24% 65%)",
          400: "hsl(138 20% 50%)",
          500: "hsl(138 18% 42%)",
          600: "hsl(138 20% 35%)",
          700: "hsl(138 22% 28%)",
          800: "hsl(138 25% 20%)",
          900: "hsl(138 28% 12%)",
        },
        olive: {
          50: "hsl(84 31% 95%)",
          100: "hsl(84 32% 88%)",
          200: "hsl(84 30% 78%)",
          300: "hsl(84 28% 62%)",
          400: "hsl(84 25% 48%)",
          500: "hsl(84 22% 40%)",
          600: "hsl(84 24% 32%)",
          700: "hsl(84 26% 25%)",
          800: "hsl(84 28% 18%)",
          900: "hsl(84 30% 12%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
