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
        'regal-blue': '#EAEAEA',
        'regal-yellow': '#C0D6DF',
        'p-gray': '#BDBDBD',
        'test1': "#98c1d9",
        'test2': "#e0fbfc",
        'test3': '#3d5a80',
        'test4': '#ee6c4d',
        'test5': '#94a3b80f',
        'highlight':'#b5d9e6'
      },
    },
  },
  plugins: [],
}
export default config
