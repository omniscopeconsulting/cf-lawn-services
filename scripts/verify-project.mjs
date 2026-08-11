import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const requiredFiles = [
  "package.json",
  "next.config.mjs",
  "app/layout.tsx",
  "app/page.tsx",
  "public/images",
];

await Promise.all(requiredFiles.map((path) => access(path, constants.R_OK)));

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
const requiredDependencies = ["next", "react", "react-dom"];
const requiredScripts = {
  dev: "next dev",
  build: "next build",
  start: "next start",
};
const requiredImages = [
  "public/images/cade-fox.svg",
  "public/images/lake-sunset.svg",
  "public/images/lawn-care.svg",
  "public/images/lawn-close.svg",
  "public/images/lawn-wide.svg",
  "public/images/logo.svg",
];

for (const dependency of requiredDependencies) {
  if (!packageJson.dependencies?.[dependency] && !packageJson.devDependencies?.[dependency]) {
    throw new Error(`Missing required dependency: ${dependency}`);
  }
}

for (const [name, command] of Object.entries(requiredScripts)) {
  if (packageJson.scripts?.[name] !== command) {
    throw new Error(`The ${name} script must be exactly: ${command}`);
  }
}

await Promise.all(requiredImages.map((path) => access(path, constants.R_OK)));

console.log(`Next.js project structure and ${requiredImages.length} image assets verified.`);
