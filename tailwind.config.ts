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
        'test1': "#D3D3D3",
        'test2': "#D3D3D3",
        'test5': '#2b3d4c',
      },
    },
  },
  plugins: [],
}
export default config
