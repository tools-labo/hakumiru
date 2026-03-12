import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const legacyFile = path.join(root, "src", "app", "lib", "hacks.json");
const recordsDir = path.join(root, "src", "data", "hacks", "records");
const generatedDir = path.join(root, "src", "data", "hacks", "generated");
const byCategoryDir = path.join(generatedDir, "by-category");
const byUseCaseDir = path.join(generatedDir, "by-use-case");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

function toIndexItem(hack) {
  return {
    id: hack.id,
    title: hack.title,
    summary: hack.summary,
    category: hack.category,
    tags: hack.tags,
    difficulty: hack.difficulty,
    plan_requirement: hack.plan_requirement,
    primary_use_case: hack.primary_use_case,
    use_cases: hack.use_cases,
    status: hack.status,
    created_at: hack.created_at,
    updated_at: hack.updated_at,
  };
}

function bootstrapRecordsFromLegacyIfNeeded() {
  if (fs.existsSync(recordsDir)) return;

  if (!fs.existsSync(legacyFile)) {
    throw new Error(
      `Neither records directory nor legacy hacks.json exists.\nMissing: ${recordsDir}\nMissing: ${legacyFile}`
    );
  }

  ensureDir(recordsDir);

  const legacyHacks = readJson(legacyFile);

  if (!Array.isArray(legacyHacks)) {
    throw new Error("Legacy hacks.json is not an array.");
  }

  for (const hack of legacyHacks) {
    if (!hack?.id) {
      throw new Error("Found hack without id in legacy hacks.json.");
    }

    writeJson(path.join(recordsDir, `${hack.id}.json`), hack);
  }

  console.log(
    `Bootstrapped ${legacyHacks.length} hack records from legacy hacks.json`
  );
}

function main() {
  bootstrapRecordsFromLegacyIfNeeded();

  ensureDir(generatedDir);
  ensureDir(byCategoryDir);
  ensureDir(byUseCaseDir);

  const files = fs
    .readdirSync(recordsDir)
    .filter((file) => file.endsWith(".json"))
    .sort();

  const records = files.map((file) => readJson(path.join(recordsDir, file)));
  const published = records.filter((hack) => hack.status === "published");

  const index = published.map(toIndexItem);

  writeJson(path.join(generatedDir, "hacks-index.json"), index);
  writeJson(path.join(generatedDir, "hacks-featured.json"), index.slice(0, 6));

  const byCategory = new Map();
  for (const item of index) {
    if (!byCategory.has(item.category)) {
      byCategory.set(item.category, []);
    }
    byCategory.get(item.category).push(item);
  }

  for (const [category, items] of byCategory.entries()) {
    writeJson(path.join(byCategoryDir, `${category}.json`), items);
  }

  const byUseCase = new Map();
  for (const item of index) {
    for (const useCase of item.use_cases) {
      if (!byUseCase.has(useCase)) {
        byUseCase.set(useCase, []);
      }
      byUseCase.get(useCase).push(item);
    }
  }

  for (const [useCase, items] of byUseCase.entries()) {
    writeJson(path.join(byUseCaseDir, `${useCase}.json`), items);
  }

  console.log(
    `Generated ${index.length} published hacks from ${records.length} records.`
  );
}

main();
