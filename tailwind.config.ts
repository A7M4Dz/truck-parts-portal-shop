<<<<<<< HEAD

=======
>>>>>>> 4626c8f429bfbc7652e6ad46d181407449b46550
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
<<<<<<< HEAD
			fontFamily: {
				sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
			},
=======
>>>>>>> 4626c8f429bfbc7652e6ad46d181407449b46550
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
<<<<<<< HEAD
				},
				linkedin: {
					blue: '#0A66C2',
					'blue-hover': '#084c94',
					gray: '#666666',
					'light-gray': '#f3f2ef'
=======
>>>>>>> 4626c8f429bfbc7652e6ad46d181407449b46550
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
<<<<<<< HEAD
				},
				'pulse-blue': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(10, 102, 194, 0.7)'
					},
					'70%': {
						boxShadow: '0 0 0 6px rgba(10, 102, 194, 0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
=======
>>>>>>> 4626c8f429bfbc7652e6ad46d181407449b46550
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
<<<<<<< HEAD
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-blue': 'pulse-blue 2s infinite',
				'scale-in': 'scale-in 0.2s ease-out'
=======
				'accordion-up': 'accordion-up 0.2s ease-out'
>>>>>>> 4626c8f429bfbc7652e6ad46d181407449b46550
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
