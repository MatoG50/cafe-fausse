# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

Project Overview

The frontend is built with:

React 18 – Component-based UI

Tailwind CSS – Utility-first styling

DaisyUI – Prebuilt Tailwind components

React Router DOM – Client-side routing

Features:

Responsive hero section with restaurant image

Reservations form integrated with Flask backend

Email newsletter signup

Gallery with images

Awards and customer reviews

Prerequisites

Node.js 18+ and npm (or yarn)

Access to the backend API (Flask + PostgreSQL)

Project Structure
frontend/
├─ public/ # Public assets
├─ src/
│ ├─ assets/ # Images
│ ├─ components/ # Reusable React components
│ ├─ pages/ # Pages: Home, Menu, Reservations, About, Gallery
│ ├─ App.tsx # App entry & routes
│ ├─ main.tsx # React entry point
│ └─ ...
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.ts

Environment Variables

Create a .env file in the frontend root directory:

VITE_API_URL=http://127.0.0.1:5000/api

VITE_API_URL – Full URL to the Flask backend API

Use the deployed backend URL when pushing to production

Installing Dependencies

From the frontend folder:

npm install

# or

yarn install

This will install:

React and React DOM

Tailwind CSS

DaisyUI

React Router DOM

React Hook Form

Axios

Running Locally

Ensure your backend Flask API is running.

Start the frontend dev server:

npm run dev

# or

yarn dev

Open your browser at: http://localhost:5173

Test features such as:

Hero section and navigation

Reservations form submission

Newsletter signup

Gallery and images

Awards and customer testimonials

Testing

Use browser dev tools to check responsive layout

Use Postman or browser network tab to confirm API calls succeed

Verify reservation submissions appear in PostgreSQL backend

Deployment to Vercel

Sign in to Vercel
and create a new project.

Connect your GitHub repository.

Select the frontend folder as the root directory.

Set environment variables in Vercel:

VITE_API_URL=https://your-backend-domain.com/api

Vercel automatically detects Vite/React project.

Click Deploy.

Your site will be live on https://<your-vercel-project>.vercel.app.
