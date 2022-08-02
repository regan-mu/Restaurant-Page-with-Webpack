import './styles.css';
import card from "./components/mainCard";
import header from "./components/header";
import footer from './components/footer';
import dishPage from './components/dishes';
import contactPage from './components/contact';

function component() {
    const main = document.createElement("div");
    main.classList.add("main");
    const mainBody = document.createElement('div');
    const {mainHeader, home, dishes, contact} = header();
    mainBody.classList.add("main-body")
    
    main.appendChild(mainHeader);
    main.appendChild(mainBody);

    mainBody.appendChild(card());
    home.addEventListener("click", () => {
        mainBody.removeChild(mainBody.lastChild);
        mainBody.appendChild(card());
    });

    dishes.addEventListener("click", () => {
        mainBody.removeChild(mainBody.lastChild);
        mainBody.appendChild(dishPage());
    });

    contact.addEventListener("click", () => {
        mainBody.removeChild(mainBody.lastChild);
        mainBody.appendChild(contactPage());
    });

    main.appendChild(footer());
    return main;
}
  
document.body.appendChild(component());