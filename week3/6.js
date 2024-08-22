let word = "madam";
let palindrome = true;

for (let i = 0; i < word.length;i++){
    if (word[i] !== word[word.length -i -1]){
        palindrome = false;
    }
}

console.log(palindrome)
