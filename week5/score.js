let scores = {
    ali: 20,
    mohamad: 16,
    sara : 26,
    reza: 11
};

topStudent = "ali"; 
for (let name of Object.keys(scores)){

    if (scores[name] > scores[topStudent]){
        topStudent = name;
    }
}
console.log(topStudent, scores[topStudent])
