// Your code goes here
// const navAnim = document.querySelectorAll('.nav-link');
// console.log(navAnim);

// navAnim.addEventListener('mouseover', (event) => {
//     navAnim.forEach().style.transform = 'scale(1,1)';
//     navAnim.forEach().style.transition = '1.25s';
// });


const navAnim = document.querySelectorAll('.nav-link');
console.log(navAnim);

navAnim.forEach(event => {
    event.addEventListener('mouseover', () => {
        event.style.transform = 'scale(2, 2)';
        event.style.transition = '1.25s';
    });
});

navAnim.forEach(event => {
    event.addEventListener('mouseleave', () => {
        event.style.transform = 'scale(1, 1)';
        event.style.transition = '1s';
    });
});


const imgRotate = document.querySelectorAll('img');
console.log(imgRotate);
imgRotate.forEach(event => {
    event.addEventListener('wheel', () => {
    event.style.transform = 'scale(2,2)';
    event.style.transition = '1.25s';
    });
});
imgRotate.forEach(event => {
    event.addEventListener('mouseleave', () => {
        event.style.transform = 'scale(1,1)';
        event.style.transition = '1s';
    });
});


// const loadingResponse = document.querySelector('window');
// loadingResponse.addEventListener('load', () => {
//     alert('Thanks for visiting our site, we have a special Bonus: 10% Off!');
// })


// const loaded = document;

window.addEventListener('load', () => {
    alert('Thanks for visiting our site, we have a special Bonus: 10% Off!');
    stop.propogation;
});

// function MouseWheelHandler(e) {

// 	// cross-browser wheel delta
// 	var e = window.event || e; // old IE support
// 	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

//     myimage.style.width = Math.max(50, Math.min(800, myimage.width + (30 * delta))) + "px";

// 	return false;
// }



    
// function scaleUp(howMuch){

// }

// addEventListener('mouseover', (event) => {
//     navAnim.style.transform = 'scale(2, 2)';
//     navAnim.style.transition = '1.25s';
// });
// navAnim.

// addEventListener('mouseleave', (event) => {
//     navAnim.style.transform = 'scale(1, 1)';
//     navAnim.style.transition = '1 s';
// });

const getH1 = document.querySelector("h1");
console.log(getH1);
getH1.addEventListener('dblclick', (event) => {
  getH1.textContent = 'Slam Dunk';
})
//getH1.
const getHtml = document.querySelector("html");
getHtml.addEventListener('keydown', (event) => {
  alert('Are you looking for a holiday?');
});
const modifyNavlink = document.querySelectorAll(".nav-link");
console.log(modifyNavlink);
modifyNavlink.forEach(event => {
  event.addEventListener("click", () => {                              event.textContent = "BS!";
   })
})