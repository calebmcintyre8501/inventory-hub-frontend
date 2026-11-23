# Inventory Hub - Frontend

Inventory Hub is an inventory management application that allows users to create accounts, manage their own inventory, and browse items listed by other users.

## Live Application

https://inventory-hub-frontend-chi.vercel.app

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

Open the application at:

http://localhost:5173

## API Configuration

During local development, the frontend connects to the backend API on port 3000 using the current hostname.

In production, API requests use the `/api` path. Vercel rewrites these requests to the deployed backend API.

## Production Build

```bash
npm run build
```

## Deployment

The frontend is deployed using Vercel.

Frontend: https://inventory-hub-frontend-chi.vercel.app

Backend API: https://inventory-hub-api.onrender.com

## Backend Repository

https://github.com/calebmcintyre8501/inventory-hub-api