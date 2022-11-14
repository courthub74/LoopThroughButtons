// FOR THE ONE LINE FIRST
// get the text by ids
let text1 = document.getElementById("cross1");
let text2 = document.getElementById("cross2");
let text3 = document.getElementById("cross3");

// test print
// console.log(text1);
// console.log(text2);
// console.log(text3);

// get the buttons by ids
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

// test print
// console.log(button1);
// console.log(button2);
// console.log(button3);

// NOW cross off the Cross Off text

// add an event listener to each button

// if text style dec = "none" or "block" then ...
// but you are changing the button text so....

// button 1
button1.addEventListener('click', (e) => {
    if (button1.innerText === "Push Me 1"){
    // test print
    console.log("button 1 pressed");
    // change the innerText
    button1.innerText = "Uncross";
    // NOW change the property of text1
    text1.style.textDecoration = "line-through";
    } else {
        if (button1.innerText === "Uncross"){
            // test print
            console.log("Uncross Pressed");
            // change the innerText
            button1.innerText = "Push Me 1";
            // NOW change the property of text1 back
            text1.style.textDecoration = "none";
        }
    }
});

// button 2
button2.addEventListener('click', (e) => {
    if (button2.innerText === "Push Me 2"){
    // test print
    console.log("button 2 pressed");
    // change the innerText
    button2.innerText = "Uncross";
    // NOW change the property of text1
    text2.style.textDecoration = "line-through";
    } else {
        if (button2.innerText === "Uncross"){
            // test print
            console.log("Uncross Pressed");
            // change the innerText
            button2.innerText = "Push Me 2";
            // NOW change the property of text1 back
            text2.style.textDecoration = "none";
        }
    }
});

// button 1
button3.addEventListener('click', (e) => {
    if (button3.innerText === "Push Me 3"){
    // test print
    console.log("button 3 pressed");
    // change the innerText
    button3.innerText = "Uncross";
    // NOW change the property of text1
    text3.style.textDecoration = "line-through";
    } else {
        if (button3.innerText === "Uncross"){
            // test print
            console.log("Uncross Pressed");
            // change the innerText
            button3.innerText = "Push Me 3";
            // NOW change the property of text1 back
            text3.style.textDecoration = "none";
        }
    }
});

