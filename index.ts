import { $ } from "bun";

const projectPath = ".vercel/project.json";
const projectFile = Bun.file(projectPath);
const exists = await projectFile.exists();

if (!exists) {
  console.error(`No file found at ${projectPath}`);
  process.exit(0);
}

const {
  projectId,
  orgId,
}: {
  projectId: string;
  orgId: string;
} = await projectFile.json();
console.log(`Opening Vercel Project: ${projectId}`);
await $`open https://vercel.com/${orgId}/${projectId}/deployments`;
