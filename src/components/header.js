import menuLink from "./menuLink";
const header = () => {
    const mainHeader = document.createElement("div");
    mainHeader.classList.add("main-header");

    const headerInner = document.createElement("div");
    headerInner.classList.add("header-inner");

    const logo = document.createElement("div");
    logo.classList.add("logo");

    const logoTitle = document.createElement("h2");
    logoTitle.textContent = "Africa Eats";

    const menuItems = document.createElement("ul");
    menuItems.classList.add("menu-items");

    // Menu Links
    const home = menuLink("Home", "home");
    const dishes = menuLink("Dishes", "dishes");    
    const contact= menuLink("Contact", "contact");

    menuItems.appendChild(home);
    menuItems.appendChild(dishes);
    menuItems.appendChild(contact);

    logo.appendChild(logoTitle);
    headerInner.appendChild(logo);
    headerInner.appendChild(menuItems);
    mainHeader.appendChild(headerInner);

    return {mainHeader, home, dishes, contact};
}

export default header;