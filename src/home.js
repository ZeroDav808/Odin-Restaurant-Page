import { burgerImage } from "./index.js"; // Import the image variable

const reviews = [
  `The Southwest Burger has bold, balanced flavors. The spicy aioli and
            creamy avocado work perfectly together. It's clear the team takes
            pride in their creative burgers.`,
  `The Classic Cheeseburger is a masterpiece. The beef is fresh and
            cooked to perfection. This is more than a burger joint; it's a full
            culinary experience.`,
  `The Smash Burger is juicy and flavorful. The patty has a perfect
            crust, and the bun holds up well. It's a truly memorable burger
            experience.`,
  `The Simple Hamburger is a perfectly executed classic. The meat is
            tender and juicy, and the toppings are fresh. It's a no-frills
            burger that delivers on quality.`,
  `The Mushroom Swiss burger was incredible. The mushrooms were sautéed
            perfectly and the cheese was gooey and delicious. It's a substantial
            burger that left me feeling full and happy.`,
  `The Bacon Cheeseburger and milkshake were great. The bacon was
            thick-cut and crispy, adding a great texture. The entire meal was a
            fantastic flavor explosion.`,
];

export function serveContent(){
    window.addEventListener('DOMContentLoaded', addContent);
}

function addContent(){
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const mainLayout = document.createElement('div');
    const contentReviews = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');

    mainLayout.id = 'main-content-layout';
    contentReviews.id = 'content-reviews';
    imgContainer.id = 'img-container';
    
    header.textContent = 'My very tasty restaurant';

    for(const p of reviews){
        const para = document.createElement('p');
        para.textContent = p;
        contentReviews.appendChild(para);
    }

    // Use the imported variable directly here.
    // Webpack will handle the correct output path for you.
    img.src = burgerImage; 
    img.alt = 'Image of American Classic Cheeseburger';
    imgContainer.appendChild(img);

    content.append(header);
    mainLayout.append(contentReviews);
    mainLayout.append(imgContainer);
    content.append(mainLayout);
}