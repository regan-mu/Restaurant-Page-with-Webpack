const footer = () => {
    const foot = document.createElement("footer");

    const myGithub = document.createElement("p");
    myGithub.textContent = "Created by Regan Mu @";

    foot.appendChild(myGithub);

    return foot
}

export default footer;