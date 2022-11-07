// TEXT TO CHANGE


// CROSS BUTTON

// get the cross button by id
var crossbutton = document.getElementById("cross");

// test print
// console.log(crossbutton);

// set up an event listener for the crossbutton
crossbutton.addEventListener('click', function(){
    // test print click
    console.log("cross button clicked");
    // NOW within this make it do stuff
    // if statement to check for the cross button innerText
    if (crossbutton.innerText === "CROSS"){
        // change the cross html to 'uncross' upon click
        crossbutton.innerText = "UNCROSS";
    // Get the title by id within the event listener
        // and change it's style 
            // for cross it's line through
    document.getElementById("content").style.textDecoration = "line-through";
    } else {
        // test print click
        console.log("uncross button clicked");
        // if statement to check for the uncross button
        if (crossbutton.innerText === "UNCROSS"){
            // change the cross text back to 'cross' upon click
            crossbutton.innerText = "CROSS";
            // NOW change the title back
            document.getElementById("content").style.textDecoration = "none"; 
        }
    }
       
});


// NOW do multiple buttons and apply querySelectorAll
// get all the cross buttons



// EDIT BUTTON