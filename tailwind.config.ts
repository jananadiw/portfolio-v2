import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 'test1': "#98c1d9",
        'test1': "#cffcf8",
        'test2': "#e0fbfc",
        // 'test5': '#94a3b80f',
        'test5': '#0b16241f',
      },
    },
  },
  plugins: [],
}
export default config
