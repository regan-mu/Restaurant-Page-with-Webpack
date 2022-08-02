import dishCard from "./dishCard";
import Matoke from "../matoke.png";
import Soup from "../hot-soup.png";
import Rice from "../fried-rice.png";

const dishesPage = () => {
    let matokeDescription = "East african dish made from unripe bananas cooked, marshed and served with stew";
    let thufuDescription = "Soup is a primarily liquid food, generally served warm or hot that is made by combining ingredients.";
    let riceDescription = "The starchy seeds of an annual southeast Asian cereal grass that are cooked and used for food";

    const dishesMain = document.createElement("div");
    dishesMain.classList.add("about-main");

    // Matoke
    const matoke = dishCard("Matoke", "500 Kes", matokeDescription);
    const matokeImg = new Image();
    matokeImg.src = Matoke;
    matoke.prepend(matokeImg);
    dishesMain.appendChild(matoke);
    // Soup
    const soup = dishCard("Thufu", "1000 Kes", thufuDescription);
    const thufuImg = new Image();
    thufuImg.src = Soup;
    soup.prepend(thufuImg);
    dishesMain.appendChild(soup);
    // Rice
    const rice = dishCard("Rice", "300 Kes", riceDescription);
    const riceImg = new Image();
    riceImg.src = Rice;
    rice.prepend(riceImg);
    dishesMain.appendChild(rice);

    return dishesMain;

}

export default dishesPage;