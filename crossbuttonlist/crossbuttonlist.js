// ADD 
// input field and submit button on a form
// form.addEventListener
    // create the input button fields in the DOM so it creates one at a time

// for cross button list

// first grab the crossbutton DOM element and store it in a variable
var crossbutton = document.querySelectorAll("#cross");

// test print 
console.log(crossbutton);

// get the text 'cross this text' by querySelector
let content = document.querySelectorAll("#content");

// test print
console.log(content);


// loop through crossbuttons
for (let h = 0; h < crossbutton.length; h++){
    // store the buttons in a variable
    let crossbuttons = crossbutton[h];
    // test print
    console.log(crossbuttons);
    // get the innerText
    let crossinner = crossbuttons.innerText;
    // print
    console.log(crossinner);
    // add an event listener to the buttons
    crossbuttons.addEventListener('click', function(){
        // Test print
        // console.log("crossed");
        // try to cross out the same text field
        // get the text 'cross this text' by querySelector
        let content = document.getElementById("content");
        // test print
        // console.log(content);
        // manipulate the data
        content.style.textDecoration = "line-through";

        // GET THIS TO WORK FOR ITS RESPECTIVE FIELDS
    })
}


// lets try the edit buttons
var editbutton = document.querySelectorAll("#edit");

// test print
console.log(editbutton);

// loop through editbuttons
for (let i = 0; i < editbutton.length; i++){
    // store the buttons in a variable
    let editbuttons = editbutton[i];
    // test print 
    console.log(editbuttons);
    // get the innerText
    let editinner = editbuttons.innerText;
    // print 
    console.log(editinner);
    // add an event listener to the buttons
    editbuttons.addEventListener('click', function(){
        // test button
        console.log("edited");
        // NOW lets check for the innerText
        if (editinner === "EDIT"){
            // test
            console.log("edited");
            // NOW make each one apply to its own input
        }
    })
}