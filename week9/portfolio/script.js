console.log("inside script");
async function getProjects() {
  const response = await fetch("http://localhost:1337/api/projects?populate=image");
  const data = await response.json();
  console.log(data);
  renderProducts(data.data);
}

function createArtice(project){
    const article = document.createElement("article");
    const textDiv = document.createElement("div");
    textDiv.className = "text";
    const imgElement = document.createElement("img");
    const h4 = document.createElement("h4");
    h4.textContent = project.attributes.title;
    const h3 = document.createElement("h3");
    h3.textContent = project.attributes.subtitle;
    const p = document.createElement("p");
    p.className = "blackbox";
    p.textContent = project.attributes.description;
    imgElement.src = "http://localhost:1337" + project.attributes.image.data[0].attributes.url;

    article.appendChild(textDiv);
    textDiv.appendChild(h4);
    textDiv.appendChild(h3);
    textDiv.appendChild(p);
    article.appendChild(imgElement);
    return article;
}

function renderProducts(projects) {
  const projectSection = document.getElementById("projects");

  for (const project of projects){
    const article = createArtice(project);
    projectSection.appendChild(article);
  }
}

getProjects();
