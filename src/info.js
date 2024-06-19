
function createInformation() {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    const title = document.createElement("h1");
    title.textContent = "Pizzeria MegaPark";
    const description = document.createElement("p");
    description.textContent = "Diese Pizza schmeckt mega lecker";
    const logo = document.createElement("img");
    logo.src = "https://de.wikipedia.org/wiki/Pizza#/media/Datei:Eq_it-na_pizza-margherita_sep2005_sml.jpg";
    content.append(title, logo, description);
}

export {createInformation};