let pouria = {
    name: 'mohammad',
    lastname: 'jahandideh',
    job: 'programmer',
    city: 'tehran'
};

for (let key of Object.keys(pouria)){
    console.log("key is", key, "value is",  pouria[key])
}

for (let [key, value] of Object.entries(pouria)){
    console.log("key is", key, "value is", value);
}


// for (let key in pouria){
//     if(pouria.hasOwnPropery(key)){
//         console.log("key is", key, "value is",  pouria[key])
//     }
// }