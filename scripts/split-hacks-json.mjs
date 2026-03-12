import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceFile = path.join(root, "src", "app", "lib", "hacks.json");
const recordsDir = path.join(root, "src", "data", "hacks", "records");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

function main() {
  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }

  ensureDir(recordsDir);

  const hacks = readJson(sourceFile);

  if (!Array.isArray(hacks)) {
    throw new Error("hacks.json is not an array.");
  }

  for (const hack of hacks) {
    if (!hack?.id) {
      throw new Error("Found hack without id.");
    }

    const outputPath = path.join(recordsDir, `${hack.id}.json`);
    writeJson(outputPath, hack);
  }

  console.log(`Split ${hacks.length} hacks into ${recordsDir}`);
}

main();
