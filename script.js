function createNewProject({
  name,
  description,
  image,
  path,
}) {
  let project = document.createElement("section");
  project.classList.add("project");
  project.innerHTML = `
    <a href="${path}">
      <img src="${image}" alt="${name}">
      <h2>${name}</h2>
      <p>${description}</p>
    </a>
  `
  return project;
}

let container = document.querySelector("#projects-container");
fetch("./projects.json")
  .then(response => response.json())
  .then(projects => 
    projects.forEach(project => 
      container.appendChild(createNewProject(project))
    )
  )
  .catch(error => 
    console.error(error)
  );
