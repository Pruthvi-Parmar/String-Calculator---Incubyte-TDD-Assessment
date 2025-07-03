export function add(numbers) {

    if (numbers === "") return 0;
    if (!numbers.includes(',')) return parseInt(numbers);

    const numArray = numbers.split(',').map(Number);

    if (numArray.length === 2) {
        return numArray[0] + numArray[1];
    }

    return 0;
}