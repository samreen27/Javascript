const questions = [
    {
        'ques': "Which of the following is a markup language?",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        "ques": "What year was JavaScript launched?",
        "a": "1996",
        "b": "1995",
        "c": "1994",
        "d": "none of the above",
        "correct": "b",
    },
    {
        'ques': "What does CSS stand for?",
        'a': "Cascading style Sheet",
        'b': 'Cat speaks something',
        'c': 'Calling shakespeare smith',
        'd': 'clever sparrow shines',
        'correct': 'a'
    }
]

let index = 0;
let right = 0
let wrong = 0
let total = questions.length
let count =0;
const question = document.querySelector(".question")
const options = document.querySelectorAll(".options")
const btn = document.querySelector(".btn")
const ticks = document.querySelectorAll(".tick")
const rows = document.querySelectorAll(".rows")


const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    else{
        reset()
    }
    const data = questions[index]
    question.innerText = `${index + 1})${data.ques}`
    options[0].nextElementSibling.innerText = data.a
    options[1].nextElementSibling.innerText = data.b
    options[2].nextElementSibling.innerText = data.c
    options[3].nextElementSibling.innerText = data.d
    console.log(data);
}

const submitQuiz = () => {
    const answer =  getAnswer()
    console.log(answer);
    let i=0
    if(answer=="a"){
         i = 0
    }
    if(answer=="b"){
         i = 1
    }
    if(answer=="c"){
         i = 2
    }
    if(answer=="d"){
        i = 3
    }
    console.log(rows[i]);
    
    if(answer === questions[index].correct){
        rows[i].style.backgroundColor = "green";
        right++
    }
    else{
        rows[i].style.backgroundColor = "red";
        wrong++
    }
    index++
    
    return
}

const getAnswer = () =>  {
    options.forEach( input => {
       
        if(input.checked){
            answer = input.value
        }
    })
    return answer
}

const reset = () => {
    options.forEach((input) => {
        input.checked = false
    })
    rows.forEach( row => {
        row.style.backgroundColor = "white"
    })
}

const endQuiz = () => {
    document.querySelector(".container").innerHTML = `<div style="background-color: green">
    <h3> Thankyou For Playing the quiz</h3>
    <h2>${right} / ${total} are correct </h3>
    </div> `
}
loadQuestion()

