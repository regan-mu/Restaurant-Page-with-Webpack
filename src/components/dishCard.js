const dish = (dishName, dishPrice, dishDescription) => {
    const dishCard = document.createElement("div");
    dishCard.classList.add("dish-card")

    const name = document.createElement("h3")
    name.classList.add("dish-name");
    name.textContent = dishName;

    const price = document.createElement("div");
    price.classList.add("dish-price");
    price.textContent = dishPrice;

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = dishDescription;
    
    dishCard.appendChild(name);
    dishCard.appendChild(price);
    dishCard.appendChild(description);

    return dishCard;

}

export default dish;