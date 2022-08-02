const footer = () => {
    const foot = document.createElement("footer");

    const myGithub = document.createElement("p");
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/regan-mu"
    githubLink.textContent = "Github";
    githubLink.target = "_blank";
    myGithub.textContent = "Created by Regan Mu | ";
    myGithub.appendChild(githubLink);

    foot.appendChild(myGithub);

    return foot
}

export default footer;