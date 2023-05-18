const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')

const [result] = cardsData.filter(card => card.id === id)


const detailsContainer = document.querySelector('.details-container')


function createDetailsSection (card) {
  const article1 = document.createElement("article");
  article1.classList.add("details-info");

  const preTitle = document.createElement("p");
  preTitle.classList.add("pre-title");
  preTitle.textContent = card['pre-title'];

  const detailsTitle = document.createElement("h2");
  detailsTitle.classList.add("details-title");
  detailsTitle.textContent = card.title;

  const rate = document.createElement("div");
  rate.classList.add("rate");

  for (let i = 0; i < 5; i++) {
    const icon = document.createElement("ion-icon");
    icon.setAttribute("name", i < 4 ? "star" : "star-outline");
    rate.appendChild(icon);
  }

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.";

  const author = document.createElement("div");
  author.classList.add("author");
  author.innerHTML = "Author: <span> Sarah Smith</span>";

  const button = document.createElement("button");
  button.classList.add("reaction-btn");
  button.textContent = "Add to Favourites";

  const iconHeart = document.createElement("ion-icon");
  iconHeart.setAttribute("name", "heart-outline");
  button.appendChild(iconHeart);

  article1.appendChild(preTitle);
  article1.appendChild(detailsTitle);
  article1.appendChild(rate);
  article1.appendChild(description);
  article1.appendChild(author);
  article1.appendChild(button);

  const article2 = document.createElement("article");
  article2.classList.add("details-card");

  const img = document.createElement("img");
  img.setAttribute("src", `..${card.image}`);
  img.setAttribute("width", "240px");
  img.setAttribute("height", "130px");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const h3 = document.createElement("h3");
  h3.textContent = "HTML";

  const by = document.createElement('span')
  by.textContent = ' by '

  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.textContent = card.author;

  authorDiv.appendChild(h3);
  authorDiv.append(by)
  authorDiv.appendChild(a);

  const reaction = document.createElement("div");
  reaction.classList.add("reaction");

  const reactionQuestion = document.createElement("p");
  reactionQuestion.classList.add("reaction-question");
  reactionQuestion.textContent = "Interested about this topic?";

  const button2 = document.createElement("button");
  button2.classList.add("reaction-btn");
  button2.textContent = "Add to Favourites";

  const iconHeart2 = document.createElement("ion-icon");
  iconHeart2.setAttribute("name", "heart-outline");
  button2.appendChild(iconHeart2);

  const credits = document.createElement("p");
  credits.classList.add("credits");
  credits.textContent = "Unlimited Credits";

  reaction.appendChild(reactionQuestion);
  reaction.appendChild(button2);
  reaction.appendChild(credits);
  cardInfo.appendChild(authorDiv);
  cardInfo.appendChild(reaction);
  article2.appendChild(img);
  article2.appendChild(cardInfo);

  detailsContainer.appendChild(article1);
  detailsContainer.appendChild(article2);

}

createDetailsSection(result)