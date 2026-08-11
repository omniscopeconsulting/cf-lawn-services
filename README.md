# CF Lawn Services

Professional, responsive marketing website for CF Lawn Services in Lake Dallas, Texas. Built with Next.js App Router, TypeScript, and Tailwind CSS.

The site uses dedicated routes for the homepage, services, gallery, about, and contact/quote experiences. No database or server-side form handler is needed.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Before shipping, run:

```bash
npm run lint
npm run typecheck
npm run verify
npm run build
```

## Deploy to Vercel

Import this repository in Vercel and leave **Root Directory** set to the repository root (`.`), where `package.json`, `next.config.mjs`, and the `app/` directory are located. The checked-in `vercel.json` explicitly selects the Next.js framework and the standard npm install/build commands.

If Vercel reports that no Next.js version was detected, reset the project&apos;s **Root Directory** to `.` in **Project Settings → Build and Deployment**, then redeploy the latest commit from the `main` branch. The `npm run verify` command can be used to confirm the repository structure before deployment.

No environment variables, database, or backend services are required. The quote form creates a pre-filled SMS on the visitor's device.

The repository includes lightweight SVG artwork for every image reference, so the site renders without any missing assets. See [`public/images/README.md`](public/images/README.md) for the asset map and replacement guidance.

The production metadata currently uses `https://cflawnservices.com`. If the final domain differs, update `metadataBase`, Open Graph URL, structured-data URL, sitemap URL, and robots sitemap in `app/`.
