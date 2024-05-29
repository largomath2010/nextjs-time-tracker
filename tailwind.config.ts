import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-grey": "rgb(250, 250, 250)",
        "te-grey": "rgb(98, 100, 106)"
      },
      boxShadow: {
        'bx-shadow': '0px 1px 2px 0px rgba(197, 198, 201, 0.32)',
      },
    },
  },
  plugins: [],
  safelist: [
    {pattern: /(mr|border|bg)-./}
  ]
}
export default config
