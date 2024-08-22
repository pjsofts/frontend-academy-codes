function doSth() {
  console.log("button clicked!");
}

function handleChange() {
  console.log("text input typed");
}


const btn = document.getElementById("mybutton");
btn.addEventListener("click", doSth)