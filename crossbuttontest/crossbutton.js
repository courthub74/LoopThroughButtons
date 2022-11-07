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

// get the edit button by id
var editbutton = document.getElementById("edit");

// test print
console.log(editbutton);

// set up the eventlistener for the edit button
editbutton.addEventListener('click', function(){
    // test the click
    console.log("edit button clicked");
    // if statement to check for the innerText of the edit button
    if (editbutton.innerText === "EDIT"){
        // change the innerText to 'save'
        editbutton.innerText = "SAVE";
        // NOW remove the readonly attribute from the edit field
            // FIRST get the element by id
        document.getElementById("edittext").removeAttribute('readonly', true);
    } else {
    // test the click
    console.log("save button clicked");
    // if statement to check for the innerText of the save button
    if (editbutton.innerText === "SAVE"){
        // change innerText back to edit
        editbutton.innerText = "EDIT";
        // NOW put back the readonly attribute
        document.getElementById("edittext").setAttribute('readonly', true);
    }
    }
})