import { add } from './calculator.js';

const input = process.argv[2];

if (!input) {
  console.log("Please provide an input string. Example:");
  console.log(`  node cli.js "1,2,3"`);
  process.exit(1);
}

try {
  const result = add(input);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
