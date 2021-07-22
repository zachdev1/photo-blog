// // Detect request animation frame
// var scroll = window.requestAnimationFrame ||
//              function(callback){ window.setTimeout(callback, 1000/60)};
// var elementsToShow =  document.querySelectorAll('.show-on-scroll'); 

// function loop() {

//     Array.prototype.forEach.call(elementsToShow, function(element){
//       if (isElementInViewport(element)) {
//         element.classList.add('img-appear');
//       } else {
//         element.classList.remove('img-appear');
//       }
//     });

//     scroll(loop);
// }

// // Call the loop for the first time
// loop();

