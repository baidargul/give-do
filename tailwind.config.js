/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',],
  theme: {
    extend: {
      colors: {
        site: {
          text: {
            title: "#333333",
            tag_tax_benefits_available: "#D97613",
            tag_recent_donor: "rgb(51, 51, 51)",
            tag_first_donor: "rgb(51, 51, 51)",
            tag_top_donor: "rgb(51, 51, 51)",
            fundraiser_support_description: "#667085",
            donation_section: "#363F72",
          },
          bg: {
            tag_tax_benefits_available: "#FDF2E2",
            tag_recent_donor: "rgba(242, 201, 76, 0.25)",
            tag_first_donor: "#EEF4FF",
            tag_top_donor: "#DBF3E5",
            redHighlight: "#E7424B",
            secondary: "#EAF2FD",
            accordion: "#F9F8F8",
            footer: "#F8F1F1",
          },
          progressBar: {
            bg: "#E8E8E8",
            value: "#FBAF17"
          },
          section: {
            bg: {
              support_section: "#FDEEEE",
              donation_section: "#EAF2FD",
            }
          },
          button: {
            share: {
              border: "#D0D5DD",
              text: "rgba(0, 0, 0, 0.87)",
              text_hover: "#666666",
            }
          },
        },
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
      },
    },
  },
  plugins: [],
}

