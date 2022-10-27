// Lets change the change me buttons

// change me button 1
// set a variable for the querySelector
let change1 = document.querySelector("#text1");

// test print
console.log(change1.innerHTML);

// NOW that you've located the button
// add the onclick event
change1.addEventListener('click', function() {
    // if the Button says Change Me
    if (change1.innerText == "Change Me"){
        // change the innerText
        change1.innerText = "1 Clik'd";
    } else {
        change1.innerText = "Change Me"
    }
});

// change me button 2
// set a variable for the querySelector
let change2 = document.querySelector("#text2");

// test print
console.log(change2.innerHTML);

// NOW that you've located the button
// add the onclick event
change2.addEventListener('click', function(){
    change2.innerText = "2 Clik'd";
});


// change me button 2
// set a variable for the querySelector
let change3 = document.querySelector("#text3");

// test print
console.log(change3.innerHTML);

// NOW that you've located the button
// add the onclick event
change3.addEventListener('click', function(){
    change3.innerText = "3 Clik'd";
});