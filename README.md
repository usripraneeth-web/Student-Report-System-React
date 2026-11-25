# Student Report System (React + Vite)

## Run locally
```bash
npm install
npm run dev
```

## Admin login
- Username: `admin`
- Password: `1234`

## Student module
Create a student account from the Student Login screen. Signup details and student reports are saved in browser Local Storage. Admin can add, view, filter, and delete student reports. Students can view their own report, performance, and profile.

## Build
```bash
npm run build
```

## Vercel
Import this GitHub repository into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`. `vercel.json` includes an SPA rewrite.

**Note:** Local Storage is suitable for a college demonstration, not production authentication. Data is stored separately in each browser/device.
