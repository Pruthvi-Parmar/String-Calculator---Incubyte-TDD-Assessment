export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    const delimiterPart = parts[0].slice(2);

    const matches = [...delimiterPart.matchAll(/\[([^\]]+)\]/g)];

    if (matches.length > 0) {
      const delimiters = matches.map(m => m[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      delimiter = new RegExp(delimiters.join('|'));
    } else {
      delimiter = new RegExp(delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }

    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    console.log(`Negative numbers detected: ${negatives.join(",")}`);
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
}
