// const detailsContainer = document.querySelector('.details-container')

// console.log(detailsContainer)

// function createDetailsSection (card) {
//   console.log(card)
//   // Create first article element with class "details-info"
//   const article1 = document.createElement("article");
//   article1.classList.add("details-info");

//   // Create p element with class "pre-title" and set its text content
//   const preTitle = document.createElement("p");
//   preTitle.classList.add("pre-title");
//   preTitle.textContent = "Web Development Languages";

//   // Create h2 element with class "details-title" and set its text content
//   const detailsTitle = document.createElement("h2");
//   detailsTitle.classList.add("details-title");
//   detailsTitle.textContent = "HTML";

//   // Create div element with class "rate"
//   const rate = document.createElement("div");
//   rate.classList.add("rate");

//   // Create five ion-icon elements with the name attribute set to "star" or "star-outline"
//   for (let i = 0; i < 5; i++) {
//     const icon = document.createElement("ion-icon");
//     icon.setAttribute("name", i < 4 ? "star" : "star-outline");
//     rate.appendChild(icon);
//   }

//   // Create p element with class "description" and set its text content
//   const description = document.createElement("p");
//   description.classList.add("description");
//   description.textContent =
//     "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web.";

//   // Create div element with class "author" and set its text content
//   const author = document.createElement("div");
//   author.classList.add("author");
//   author.innerHTML = "Author: <span> Sarah Smith</span>";

//   // Create button element with class "reaction-btn" and set its text content
//   const button = document.createElement("button");
//   button.classList.add("reaction-btn");
//   button.textContent = "Add to Favourites";

//   // Create ion-icon element with the name attribute set to "heart-outline"
//   const iconHeart = document.createElement("ion-icon");
//   iconHeart.setAttribute("name", "heart-outline");
//   button.appendChild(iconHeart);

//   // Append all elements to their respective parent elements
//   rate.appendChild(iconHeart);
//   article1.appendChild(preTitle);
//   article1.appendChild(detailsTitle);
//   article1.appendChild(rate);
//   article1.appendChild(description);
//   article1.appendChild(author);
//   article1.appendChild(button);

//   // Create second article element with class "details-card"
//   const article2 = document.createElement("article");
//   article2.classList.add("details-card");

//   // Create img element with src, alt, width, and height attributes
//   const img = document.createElement("img");
//   img.setAttribute("src", "../assets/javascript.jpg");
//   img.setAttribute("alt", "");
//   img.setAttribute("width", "240px");
//   img.setAttribute("height", "130px");

//   // Create div element with class "card-info"
//   const cardInfo = document.createElement("div");
//   cardInfo.classList.add("card-info");

//   // Create div element with class "author"
//   const authorDiv = document.createElement("div");
//   authorDiv.classList.add("author");

//   // Create h3 element and set its text content
//   const h3 = document.createElement("h3");
//   h3.textContent = "HTML";

//   // Create a element with href attribute
//   const a = document.createElement("a");
//   a.setAttribute("href", "#");
//   a.textContent = " Sarah Smith";

//   // Append h3 and a elements to authorDiv
//   authorDiv.appendChild(h3);
//   authorDiv.appendChild(a);

//   // Create div element with class "reaction"
//   const reaction = document.createElement("div");
//   reaction.classList.add("reaction");

//   // Create p element with class "reaction-question" and set its text content
//   const reactionQuestion = document.createElement("p");
//   reactionQuestion.classList.add("reaction-question");
//   reactionQuestion.textContent = "Interested about this topic?";

//   // Create button element with class "reaction-btn" and set its text content
//   const button2 = document.createElement("button");
//   button2.classList.add("reaction-btn");
//   button2.textContent = "Add to Favourites";

//   // Create ion-icon element with the name attribute set to "heart-outline"
//   const iconHeart2 = document.createElement("ion-icon");
//   iconHeart2.setAttribute("name", "heart-outline");
//   button2.appendChild(iconHeart2);

//   // Create p element with class "credits" and set its text content
//   const credits = document.createElement("p");
//   credits.classList.add("credits");
//   credits.textContent = "Unlimited Credits";

//   // Append all elements to their respective parent elements
//   reaction.appendChild(reactionQuestion);
//   reaction.appendChild(button2);
//   reaction.appendChild(credits);
//   cardInfo.appendChild(authorDiv);
//   cardInfo.appendChild(reaction);
//   article2.appendChild(img);
//   article2.appendChild(cardInfo);

//   // Append detailsContainer, article1, and article2 to section
//   console.log(detailsContainer)
//   detailsContainer.appendChild(article1);
//   detailsContainer.appendChild(article2);
//   section.appendChild(detailsContainer);

// }