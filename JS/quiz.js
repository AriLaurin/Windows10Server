const correctAnswers = ["B", "B", "B", "B"]; //stores all correct answers of the quiz
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result") //grabs result class

form.addEventListener("submit", e => { 
    e.preventDefault();

    let score = 0; //might update the score, use let
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value] //gets us the value of the input field A or B


    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){ //is correctAnswers (form.value) equal to index (array item 0-3)
            score += 25;
    }
});

    // show result on page
    scrollTo(0,0); //scrolls to the very top, x y coords
    result.classList.remove("d-none"); //removes d-none tag so you can see the result on page

    let output = 0; //same as score
    const timer = setInterval(() => {
        result.querySelector("span").textContent = `${output}%`; //looks for a span tag to change the percentage number
        if(output === score){
            clearInterval(timer);
        }else{
            output++ // if score doesnt = output, continue counting
        }
    }, 10);

});

//window object (global object)

//console.log("hello");
//window.console.log("hello"); //we dont need to write window, because these commands are already done in the window object

//console.log(document.querySelector("form"));
//console.log(window.document.querySelector("form")); //exactly the same result

//alert("hello");
//window.alert("hello"); --=--

//setTimeout(() =>{ //also a command set on the window object
//    alert("hello, ninjas");
//}, 3000);

//let i = 0;
//
// const timer = setInterval(() => { //does an action every set time
//    console.log("hello");
//    i++;
//    if( i === 5){
//        clearInterval(timer); //by setting the setInterval function as a const, write this and you can stop it
//    }
//}, 1000);