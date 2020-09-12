// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerCont = document.querySelector('.header-container');
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    let span1 = document.createElement('span');
    span1.classList.add('date');
    span1.textContent="MARCH 28, 2020";
    let header1 = document.createElement('h1');
    header1.textContent = "Lambda Times";
    let span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent ="98°";
    headerDiv.append(span1,header1,span2);
    headerCont.appendChild(headerDiv)
}

Header()