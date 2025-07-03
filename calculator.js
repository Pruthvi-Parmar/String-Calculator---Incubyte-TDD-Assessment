export function add(numbers) {

    if (numbers === "") return 0;
    if (!numbers.includes(',')) return parseInt(numbers);

    let numArray = numbers.split(',').map(Number);

    if (numArray.length === 2) {
        return numArray[0] + numArray[1];
    }else{
        numArray = numbers.split(',').map(Number);
        return numArray.reduce((sum, num) => sum + num, 0);
    }

    return 0;
}