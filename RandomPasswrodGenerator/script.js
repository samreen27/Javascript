const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"


const passBox = document.getElementById("input")
const pwdlen = document.getElementById("pwdlen")
const upperInput = document.getElementById("upperCase")
const lowerInput = document.getElementById("lowerCase")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const btn = document.querySelector(".btn")
let div = document.createElement("div")

const getRandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password = "") => {

    if (upperInput.checked) {
        password = password + getRandomdata(upperSet)


    }
    if (lowerInput.checked) {

        password = password + getRandomdata(lowerSet)

    }
    if (numberInput.checked) {
        password = password + getRandomdata(numberSet)

    }
    if (symbolInput.checked) {
        password = password + getRandomdata(symbolSet)

    }
    
    if (password == "") {
        console.log("if");
        div.innerHTML = "**Please select the checkboxes of your choice to generate the password"
        div.style.color = "red"
        document.getElementById("input").before(div)
        console.log(div.innerHTML);
        setTimeout(()=>{
            div.remove()
        },2000)
        return
    }

    if (password.length < pwdlen.value) {
        return generatePassword(password)

    }

    passBox.value = password.substring(0, pwdlen.value)
}

btn.addEventListener('click', () => {

    generatePassword()




})
