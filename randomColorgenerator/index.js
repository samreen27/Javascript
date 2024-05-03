function random() {
    let r = Math.ceil(0 + Math.random() * 255);
    return r
}
let btn = document.getElementById("btn")
console.log(btn);

btn.addEventListener('click', () => {
    let [r, g, b] = [random(), random(), random()];
    document.querySelector(".main").style.backgroundColor = `rgb(${r},${g},${b})`;
    document.getElementById("color-name").innerText = `rgb(${r},${g},${b})`
})
 document.querySelector(".main").style.backgroundColor = `rgb(${random()},${random()},${random()})`;




 
// const getColor = () => {
//     // Hex Code
//     const randomNumber = Math.floor(Math.random() * 16777215);
//     const randomCode = "#" + randomNumber.toString(16);
//     document.body.style.backgroundColor = randomCode;
//     document.getElementById("color-code").innerText = randomCode;

//     navigator.clipboard.writeText(randomCode)
// }

// //event call
// document.getElementById("btn").addEventListener(
//     "click",
//     getColor
// )


// // init call
// getColor();