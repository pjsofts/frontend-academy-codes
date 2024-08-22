const productsDiv = document.getElementById("products");

function renderProducts(products) {
  for (let product of products) {
    console.log("product is", product);
    const element = document.createElement("div");
    const imgElement = document.createElement("img");
    const image = product.attributes.image.data.attributes.url;
    imgElement.src ="http://localhost:1337" + image;
    element.textContent = product.attributes.title;
    element.className = "product";
    productsDiv.appendChild(element);
    element.appendChild(imgElement);
  }
}

async function getData() {
  //   const url = "https://fakestoreapi.com/products";
  const url = "http://localhost:1337/api/products?populate=image";
  const response = await fetch(url);
  const data = await response.json();
  renderProducts(data.data);
}

function showProduct() {
  getData();
  console.log("Showing products");
}
