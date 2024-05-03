const slides = document.querySelectorAll(".slide")
var counter = 0;
const len = slides.length
console.log("l", len);


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`

})

const goPrev = () => {
    if (counter != 0) {
        counter--;
        slideImage();
    }
}

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
    console.log(counter);
    
}

const slideImage = () => {
    slides.forEach(

        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`

        }
    )
}