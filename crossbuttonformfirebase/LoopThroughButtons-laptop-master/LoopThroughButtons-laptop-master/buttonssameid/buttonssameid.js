// NOW same ID

// How do we query?

// querySelectorAll() method returns all elements that matches a CSS selector(s)
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

// In this case you might want to access by Class

// TEXT
let text = document.getElementsByClassName("cross");
// ABOVE returns an HTML collection for the text
// test print the HTML collection
console.log(text);

// BUTTON
let button = document.getElementsByClassName("button");
// ABOVE returns an HTML collection for the buttons
// test print the HTML collection
console.log(button);

// Iterate through the buttons
for (i = 0; i < button.length; i++){
    // store iterations in a variable
    let buttons = button[i];
    // test print
    console.log(buttons);
    // ABOVE is printing the actual element for each button

    // NOW try item() to return the element at a specified index
    // add an event listener to button see outcome
    buttons.addEventListener('click', (e) => {
        // test print 
        console.log("button pressed");
        // get the text in this for loop
        let text = document.getElementsByClassName("cross");
        // iterate through them now
        for (a = 0; a < text.length; a++){
            // test print
            console.log(text[a]);
            let texters = text[a];
            // change the text decoration
            // texters.innerHTML = "Help";
            // first one
            texters.innerHTML = "First Button"
        }
    })
};

