const menuLink = (text, role) => {
    const item = document.createElement("li");
    item.classList.add("item", role);
    item.textContent = text;
    
    return item
};

export default menuLink;