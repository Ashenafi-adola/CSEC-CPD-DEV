# React Contact Form with useForm

A simple React + TypeScript contact form built with Vite and `react-hook-form`.

## Features

- `react-hook-form` powered form state management
- Name, Email, and Message fields
- Required field validation
- Email format validation
- Success message shown on submit

## Project structure

- `src/App.tsx` — renders the form component
- `src/components/ContactForm.tsx` — main contact form implementation
- `package.json` — dependencies and scripts
- `vite.config.ts` — Vite configuration for React and TypeScript

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser at `http://localhost:5173`.

## Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Dependencies

- `react`
- `react-dom`
- `react-hook-form`

## Dev dependencies

- `vite`
- `typescript`
- `eslint`
- `@vitejs/plugin-react`

## Notes

This project uses TypeScript and Vite for fast local development and a lightweight React setup. The contact form is implemented with `useForm` from `react-hook-form` for clean validation and submission handling.
