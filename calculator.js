//To ensure clean and modern code Base, I use ES6 syntax
export function add(numbers, start, end) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].slice(2);

    const matches = [...delimiterPart.matchAll(/\[([^\]]+)\]/g)];

    if (matches.length > 0) {
      const delimiters = matches.map((m) =>
        m[1].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      delimiter = new RegExp(delimiters.join("|"));
    } else {
      delimiter = new RegExp(
        delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );

      if (delimiterPart == "*") {
        numbers = parts[1];

        const numArray = numbers.split(delimiter).map(Number);

        return ansForMul(numArray, (ope = "*"), numbers);
      }
    }

    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length > 0) {
    console.log(`Negative numbers detected: ${negatives.join(",")}`);
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  let filteredArray = numArray.filter((n) => n <= 500);

  if (start) {
    return ansForDiff(filteredArray, start, end);
  } else {
    return filteredArray.reduce((sum, num) => sum + num, 0);
  }
}

function ansForMul(filteredArray, ope, numbers, start, end) {
  if (ope == "*") {
    return filteredArray
      .filter((n) => n <= 500)
      .reduce((sum, num) => sum * num, 1);
  }
}

function ansForDiff(filteredArray, start, end) {
  return filteredArray
    .filter((n) => n >= start && n <= end)
    .reduce((sum, num) => sum + num, 0);
}
