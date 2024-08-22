let numbers = [100,5,4,6,7];

let min = numbers[0];

for (let number of numbers){
    if (number < min){
        min = number
    }
}

console.log(min);