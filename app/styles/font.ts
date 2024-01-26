import { Young_Serif, Inter, Outfit, Playfair_Display } from "next/font/google"

export const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '900'],
})
export const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: '400'
})

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200']
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700']
})