let vowels = ["a", "i", "e", "o", "u"]
let word = "hello wolrd"

let sum = 0;
for (let letter of word){
    if (vowels.includes(letter)){
        sum += 1
        console.log(letter)
    }
}

console.log(sum)