// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const axiosPromise = axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((r)=>{
    console.log(r.data.articles)
    r.data.articles.javascript.forEach(item=>{
        cardMaker(item);
    })
})


function cardMaker(article){
    let cardContainer = document.querySelector('.cards-container');
    let card = document.createElement('div');
    card.classList.add('card');
    let headline = document.createElement('div');
    headline.classList.add('headline');
    let author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);
    let imageCont = document.createElement('div');
    imageCont.classList.add('img-container');
    let img1 = document.createElement('img');
    let span1 = document.createElement('span');
    img1.src = article.authorPhoto;
    span1.textContent = `By ${article.authorName}`;
    imageCont.append(img1,span1);
    author.appendChild(imageCont);
    card.append(headline,author);
    cardContainer.appendChild(card);
}