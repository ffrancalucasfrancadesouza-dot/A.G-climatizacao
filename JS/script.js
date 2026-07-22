// // Header Sroll
console.log("errorrrrrrrr")

// const header = document.querySelector(".header");

// window.addEventListener("scroll",()=>{

//     if(window.scrollY > 50){

//         header.classList.add("scroll");

//     }else{

//         header.classList.remove("scroll");

//     }

// });
// //================ CONTADOR =================//

// const counters = document.querySelectorAll(".counter");

// const startCounter = (counter) => {

//     const target = +counter.getAttribute("data-target");

//     let count = 0;

//     const increment = target / 100;

//     const update = () => {

//         count += increment;

//         if(count < target){

//             counter.innerText = Math.floor(count);

//             requestAnimationFrame(update);

//         }else{

//             counter.innerText = target + "+";

//         }

//     };

//     update();

// };

// const observer = new IntersectionObserver((entries)=>{

//     entries.forEach(entry=>{

//         if(entry.isIntersecting){

//             startCounter(entry.target);

//             observer.unobserve(entry.target);

//         }

//     });

// });

// counters.forEach(counter=>{

//     observer.observe(counter);

// });