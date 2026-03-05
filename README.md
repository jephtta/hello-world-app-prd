# Hello World App

A minimal Next.js application that displays a centered "Hello World" heading. Built with the Next.js App Router, TypeScript, Tailwind CSS, and Firebase, deployed to Google Cloud Run.

## Prerequisites

- Node.js 20+
- npm
- A Firebase project (for Firestore — currently scaffolded but unused)

## Local Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Web API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain (e.g. `project.firebaseapp.com`) |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Cloud Messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |

These values are found in the Firebase Console under Project Settings > General > Your apps.

## Running Tests

```bash
# Install Playwright browsers (first time only)
npx playwright install --with-deps

# Run all E2E tests
npx playwright test

# Run tests against a deployed URL
PLAYWRIGHT_BASE_URL=https://your-app.run.app npx playwright test
```

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

The app is containerized via the included `Dockerfile` and deployed to Google Cloud Run.

## Live URL

https://hello-world-app-prd-cgjawpkxua-uc.a.run.app

## GitHub Repository

https://github.com/jephtta/hello-world-app-prd
