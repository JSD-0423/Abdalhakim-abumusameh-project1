function createCard(cards) {

  cards.forEach((card) => {
    // Create the <article> element
    var article = document.createElement("article");
    article.className = "card";

    // Create the <img> element
    var img = document.createElement("img");
    img.src = card.image;

    // Append the <img> element to the <article> element
    article.appendChild(img);

    // Create the <div> element with class "card-info"
    var cardInfo = document.createElement("div");
    cardInfo.className = "card-info";

    // Create the <h3> element with class "pre-title"
    var preTitle = document.createElement("h3");
    preTitle.className = "pre-title";
    preTitle.textContent = card['pre-title'];

    // Create the <h2> element with class "title"
    var title = document.createElement("h2");
    title.className = "title";
    title.textContent = card.title;

    // Create the <div> element with class "rate"
    var rate = document.createElement("div");
    rate.className = "rate";

    // Create five <ion-icon> elements
    for (var i = 0; i < 4; i++) {
      var ionIcon = document.createElement("ion-icon");
      ionIcon.name = "star";
      rate.appendChild(ionIcon);
    }

    // Create the <ion-icon> element with class "star-outline"
    var ionIconOutline = document.createElement("ion-icon");
    ionIconOutline.name = "star-outline";
    rate.appendChild(ionIconOutline);

    // Create the <p> element with class "author"
    var author = document.createElement("p");
    author.className = "author";
    author.textContent = "Author: ";

    // Create the <span> element with class "author-name"
    var authorName = document.createElement("span");
    authorName.className = "author-name";
    authorName.textContent = card.author;

    // Append the <span> element to the <p> element
    author.appendChild(authorName);

    // Append all elements to the <div> element with class "card-info"
    cardInfo.appendChild(preTitle);
    cardInfo.appendChild(title);
    cardInfo.appendChild(rate);
    cardInfo.appendChild(author);

    // Append the <div> element with class "card-info" to the <article> element
    article.appendChild(cardInfo);

    // Append the <article> element to the desired parent element in your document
    cardsContinaer.appendChild(article);

  })
}

createCard(cardsData)