export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    const delimiterPart = parts[0].slice(2);

    const match = delimiterPart.match(/\[(.+?)\]/);
    if (match) {
      const customDelimiter = match[1];
      delimiter = new RegExp(customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    } else {
      delimiter = new RegExp(delimiterPart);
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
