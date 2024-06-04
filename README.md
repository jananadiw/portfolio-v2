# Developer Portfolio Website
[![Package - react](https://img.shields.io/github/package-json/dependency-version/plutach/portfolio/react?color=blue)](https://www.npmjs.com/package/react)
[![Package - next](https://img.shields.io/github/package-json/dependency-version/plutach/portfolio/next?color=blue)](https://www.npmjs.com/package/next)
[![Deployed with - Vercel](https://img.shields.io/badge/Deployed_with-Vercel-black)](https://)

> A simple personal portfolio website to showcase and organize important personal and work projects all in one place, built with NextJs, Tailwind CSS, [next-translate](https://github.com/aralroca/next-translate) & [react-toggle-dark-mode](https://www.npmjs.com/package/react-toggle-dark-mode).

## Preview
<img src="/public/preview.png" width="800"/>

## Build Setup
```bash
install project
npm install

Run on localhost on port 3000.
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure
```js
.
├── components // all React Components can be used in layouts, pages
│   ├── navbar
│   ├── header
├── pages // route pages
|   ├── about // about page
│   │   ├── index.tsx
│   ├── _app.tsx // error page
│   ├── index.tsx // home/index page
├── public // static imgs etc.
└── styles
```

## Deploy on Vercel
Commit and push changes to deploy on Vercel.
