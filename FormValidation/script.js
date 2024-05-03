const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit',(e)=>{
        let messages = []
        if (username.value === "" || username.value == null){
            messages.push("Username cant be empty")
        }

        if(password.value.length<=6){
            messages.push("password must be longer than 6 characters")
        }
        if(password.value.length>=20){
            messages.push("password must be less than 20 characters")
        }

        if (password.value==='password'){
            messages.push("password cant be password")
        }

        if (messages.length>0){
            errorElement.innerHTML = messages.join(', ');
            //prevent page from submitting
            e.preventDefault()
        }
    })
