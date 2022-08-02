import Facebook from "../facebook.png";
import Instagram from "../instagram.png";
import Twitter from "../twitter.png";

const contactPage = () => {
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    const socials = document.createElement("div");
    socials.classList.add("socials");
    const fb = new Image();
    fb.src = Facebook;

    const insta = new Image();
    insta.src = Instagram;

    const twitter = new Image();
    twitter.src = Twitter;

    socials.appendChild(fb);
    socials.appendChild(insta);
    socials.appendChild(twitter);


    const cardHeader = document.createElement("h3");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = "Contact Us";
    contactCard.appendChild(cardHeader);

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    const cardText1 = document.createElement("p");
    cardText1.textContent = "Moi Avenue, Nairobi";
    const cardText2 = document.createElement("p");
    cardText2.textContent = "(254) 700 000 0000";
    const cardText3 = document.createElement("p");
    cardText3.textContent = "food@africaeats.com";

    cardInfo.appendChild(cardText1);
    cardInfo.appendChild(cardText2);
    cardInfo.appendChild(cardText3);


    contactCard.appendChild(cardHeader);
    contactCard.appendChild(cardInfo);
    contactCard.appendChild(socials);
    
    return contactCard;
}

export default contactPage;