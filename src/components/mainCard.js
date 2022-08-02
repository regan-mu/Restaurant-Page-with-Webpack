import Restaurant from "../restaurant.png";
const mainCard = () => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTop = document.createElement("div");
    cardTop.classList.add("card-top");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Africa's Finest Dishes";

    const subTitle = document.createElement("p");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Grab yourself a cozy meal from the cradle of Mankind! 😜";

    const restaurantImg = new Image();
    restaurantImg.src = Restaurant;

    cardTop.appendChild(title);
    cardTop.appendChild(subTitle);

    card.appendChild(cardTop);
    card.appendChild(restaurantImg);

    return card;
}

export default mainCard;