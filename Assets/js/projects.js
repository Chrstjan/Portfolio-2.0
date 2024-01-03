const projectsContainer = document.getElementById("projects");

const projectsArray = ["Gpt-3", "Dinny", "Centrum"];

const baseUrl = "./Assets/images/projects/";

const displayProjects = () => {
  projectsArray.forEach((project, index) => {
    const projectContainer = document.createElement("article");
    projectContainer.classList.add("project-article");

    const projectHeader = document.createElement("header");
    const projectHeaderText = document.createElement("h3");
    projectHeaderText.textContent = projectsArray[index];

    projectHeader.appendChild(projectHeaderText);

    const projectDescContainer = document.createElement("div");

    const projectDescArray = [
      "Chat-Gpt-3 Project was a project we were given on GF2",
      "Dinny Projects was a project we were given on GF2",
      "Centrum Project was a project we were given on GF2",
    ];

    const projcetDescText = document.createElement("p");
    projcetDescText.textContent = projectDescArray[index];

    const projectImgArray = ["GPT-01.png", "Dinny.jpg", "event.png"];

    const projectFigure = document.createElement("figure");

    projectDescContainer.appendChild(projcetDescText);
    projectDescContainer.appendChild(projectFigure);

    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(projectDescContainer);

    projectsContainer.appendChild(projectContainer);
  });
};

window.addEventListener("load", displayProjects);
