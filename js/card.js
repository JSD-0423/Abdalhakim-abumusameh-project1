function createCard(cards) {

  cards.forEach((card) => {
    let article = document.createElement("article");
    article.className = "card";
    article.dataset.id = card.id;

    article.addEventListener('click', () => {
      const cardId = card.id;
      const detailsUrl = `../pages/details.html?id=${cardId}`

      window.location.href = detailsUrl;
    })

    let img = document.createElement("img");
    img.src = `.${card.image}`;

    article.appendChild(img);

    let cardInfo = document.createElement("div");
    cardInfo.className = "card-info";

    let preTitle = document.createElement("h3");
    preTitle.className = "pre-title";
    preTitle.textContent = card['pre-title'];

    let title = document.createElement("h2");
    title.className = "title";
    title.textContent = card.title;

    let rate = document.createElement("div");
    rate.className = "rate";

    for (let i = 0; i < 4; i++) {
      let ionIcon = document.createElement("ion-icon");
      ionIcon.name = "star";
      rate.appendChild(ionIcon);
    }

    let ionIconOutline = document.createElement("ion-icon");
    ionIconOutline.name = "star-outline";
    rate.appendChild(ionIconOutline);

    let author = document.createElement("p");
    author.className = "author";
    author.textContent = "Author: ";

    let authorName = document.createElement("span");
    authorName.className = "author-name";
    authorName.textContent = card.author;

    author.appendChild(authorName);

    cardInfo.appendChild(preTitle);
    cardInfo.appendChild(title);
    cardInfo.appendChild(rate);
    cardInfo.appendChild(author);

    article.appendChild(cardInfo);

    cardsContinaer.appendChild(article);

  })
}

createCard(cardsData)