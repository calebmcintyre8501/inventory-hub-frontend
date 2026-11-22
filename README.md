# Inventory Hub - Frontend

Inventory Hub is an inventory management application that allows
users to create accounts, manage their own inventory, and browse
items listed by other users.

## Technologies

- React
- Vite
- JavaScript
- CSS

## Features

- User registration and login
- Create, view, edit, and delete inventory items
- Personal inventory management
- Public inventory browsing
- Responsive user interface

## Prerequisites

- Node.js 22+
- npm
- Inventory Hub API

## Installation

Clone the repository:

```bash
git clone https://github.com/calebmcintyre8501/inventory-hub-frontend.git
cd inventory-hub-frontend
```

Install dependencies:

```bash
npm ci
```

## Running Locally

Make sure the backend API is running on port 3000.

Start the frontend:

```bash
npm run dev
```

Open the application in your browser:

http://localhost:5173

## Environment Configuration

The frontend automatically connects to the local API on port 3000.

To use a different API URL, create a `.env` file in the
frontend directory:

```env
VITE_API_URL=http://localhost:3000/api
```

## Production Build

```bash
npm run build
```

## Backend Repository

https://github.com/calebmcintyre8501/inventory-hub-api# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
