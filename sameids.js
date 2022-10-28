// Lets change the change me buttons

// instead of querying each button
    // query all the buttons
let buttons = document.querySelectorAll("#text");

// test print with a for loop
for (i = 0; i < buttons.length; i++){
    // set a variable for buttons[i]
    let allbuttons = buttons[i];
    // test print the buttons
    console.log(allbuttons.innerHTML);
    // addEventListener for click
    allbuttons.addEventListener('click', function(){
        // if statement checks the innerHTML
        if (allbuttons.innerHTML == "Change Me"){
            // change the innerHTML to Clik'd
            allbuttons.innerHTML = "This Clik'd";
        } else {
            if (allbuttons.innerHTML == "This Clik'd"){
                // change the innerHTML back
                allbuttons.innerHTML = "Change Me";
            }
        }
    })
};


