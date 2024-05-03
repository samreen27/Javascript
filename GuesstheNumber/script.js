let randomVar = 1+99*Math.random();


while(true){
    let guess = prompt("Enter a Number");
    if(guess<randomVar){
        alert("The guess is lesser, Try Again!")
    }
    else if(guess>randomVar){
            alert("The guess is greater, Try Again!")
    }
    else{
        alert("You guessed it right")
        break
    }
}
