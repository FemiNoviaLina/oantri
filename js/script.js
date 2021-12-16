import { outlets } from "./data.js";

const outlet_cards = document.getElementById("outlet-cards");

const createOutletCard = (element) => {
    const outlet_card = document.createElement("div");
    outlet_card.classList.add("card");

    const outlet_card_logo = document.createElement("img");
    outlet_card_logo.src = element.logo;

    const outlet_card_name = document.createElement("div");
    outlet_card_name.classList.add("card-text");
    const outlet_card_name_text = document.createElement("h3");
    outlet_card_name_text.innerHTML = element.name;
    outlet_card_name.appendChild(outlet_card_name_text);

    outlet_card.appendChild(outlet_card_logo);
    outlet_card.appendChild(outlet_card_name);

    outlet_card.onclick = () => {
        window.sessionStorage.setItem("outlet", element.name);
        window.location.href = "outlet_detail.html";
    }

    return outlet_card;
}

outlets.forEach(element => {
    outlet_cards.append(createOutletCard(element));
});

console.log(outlets);