// define variables
const projectName = document.getElementsByClassName("projectName");
const browserLink = document.getElementsByClassName("browser-link");
const gitHubLink = document.getElementsByClassName("github-link");

// Hide browser and github icons
for (let i = 0; i < projectName.length; i++) {
  browserLink[i].hidden = true;
  gitHubLink[i].hidden = true;
}

// function to change color after click on icon which contains a link
const changeColor = (e) => {
    e.target.style.color = "#571561";
};

// function to hide the name of the project when hover over it
const hideProjectName = (e) => {
  for (let i = 0; i < projectName.length; i++) {
    if (e.target === projectName[i]) {
      projectName[i].hidden = true;
      browserLink[i].hidden = false;
      gitHubLink[i].hidden = false;
    }
  }
};

// function to show again the name of the project when hover out of it
const showProjectName = (e) => {
    console.log(e)
  for (let i = 0; i < projectName.length; i++) {
    if (e.target === projectName[i]) {
      projectName[i].hidden = false;
      browserLink[i].hidden = true;
      gitHubLink[i].hidden = true;
    }
  }
};

// function that add event listeners to elements
const controlEvents = () => {
  for (let i = 0; i < projectName.length; i++) {
    projectName[i].addEventListener("mouseover", hideProjectName);
    projectName[i].addEventListener("mouseout", showProjectName);
    browserLink[i].firstChild.addEventListener('click', changeColor);
    gitHubLink[i].firstChild.addEventListener('click', changeColor);
  }
};


controlEvents();
