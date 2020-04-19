/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//Image Array
const images = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
]
//Starting Index
var index = 0;
//Parent Div
const carouselContainer = document.querySelector('.carousel-container');
//Image Element
const caroImg = document.createElement('img');

//Image creation function
function imageCreator() {
  caroImg.src = images[index];
}
//Call to creation function
imageCreator();
//Carousel function
function Carousel() {
  //carousel div
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  carouselContainer.appendChild(carousel);
  //Left carousel Button
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = '<';
  carousel.appendChild(leftButton);
  //Left button event listener
  leftButton.addEventListener('click', () => {
    if (index > 0){
      index--;
    } else {
      index = images.length - 1;
    }
    imageCreator();
  })
  //Right Carousel button
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = '>';
  carousel.appendChild(rightButton);
  //Right Button event listener
  rightButton.addEventListener('click', () => {
    if (index < images.length -1){
      index++;
    } else {
      index = 0;
    }
    imageCreator();
  })
  //Image Append
  carousel.appendChild(caroImg);
}

Carousel();