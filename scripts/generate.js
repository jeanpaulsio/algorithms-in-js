#!/usr/bin/env node

import fs from "fs";
import path from "path";
import readline from "readline";

const directories = [
  "arrays-and-strings",
  "subarrays",
  "binary-search",
  "recursion-and-backtracking",
  "linked-lists",
  "stacks",
  "queues",
  "dynamic-programming",
  "hash-tables",
  "graphs",
  "heaps",
  "line-sweep",
  "sorting",
  "bit-manipulation",
  "binary-trees",
  "binary-search-trees",
  "tries",
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function toCamelCase(str) {
  return str
    .split("-")
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

function generateImplementationFile(directory, fileName, functionName) {
  const content = `export function ${functionName}() {
  
}
`;
  fs.writeFileSync(path.join(directory, `${fileName}.js`), content);
}

function generateTestFile(directory, fileName, functionName) {
  const content = `import { ${functionName} } from "./${fileName}";

describe("${functionName}", () => {
  test("should work", () => {
    // Add your test cases here
  });
});
`;
  fs.writeFileSync(path.join(directory, `${fileName}.test.js`), content);
}

async function promptDirectory() {
  console.log("\nAvailable directories:");
  directories.forEach((dir, index) => {
    console.log(`${index + 1}. ${dir}`);
  });

  return new Promise((resolve) => {
    rl.question("\nSelect directory number: ", (answer) => {
      const index = parseInt(answer) - 1;
      if (index >= 0 && index < directories.length) {
        resolve(directories[index]);
      } else {
        console.log("Invalid selection. Please try again.");
        resolve(promptDirectory());
      }
    });
  });
}

async function main() {
  const fileName = process.argv[2];

  if (!fileName) {
    console.error("Please provide a file name (e.g., 'two-sum')");
    process.exit(1);
  }

  const directory = await promptDirectory();
  const functionName = toCamelCase(fileName);

  // Ensure directory exists
  const fullPath = path.join(process.cwd(), directory);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }

  generateImplementationFile(fullPath, fileName, functionName);
  generateTestFile(fullPath, fileName, functionName);

  console.log(`\nCreated files in ${directory}/:
- ${fileName}.js
- ${fileName}.test.js`);

  rl.close();
}

main().catch(console.error); 