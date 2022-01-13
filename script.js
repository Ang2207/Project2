
// Selectors
const slides = document.querySelectorAll('.slide');


// Event Listeners
slides.forEach(el=>{
    el.addEventListener('click', ()=>{
        document.querySelector('.container .slide.active').classList.remove('active');
        el.classList.add('active');
    });
});


const index = Math.round( Math.random() * (slides.length-1) );   // 0 - 3 patahakan tiv kvercni
slides[index].classList.add('active');