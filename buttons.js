// lets loop through the buttons to the console

// try using EVENT DELEGATION

// first get the buttons by PARENT id and event listener
document.getElementById("buttons").addEventListener('click', function(e){
    // if statement by event target for the event function
        // the event target is the elements by id within the parent div
    if (e.target && e.target.id == "button"){
        console.log("Ready for the functionality");
        // test print the innerText of the button
        console.log(buttons.innerText);
        // set the innerText of each button pressed to something different
        let button1 = document.getElementsByClassName("button1");
        console.log(button1);
        if (button1.innerText == "Button 1"){
            button1.innerText = "Click'd";
            console.log("test");
        }
    }
});

// first get the buttons by ID
// let buttons = document.getElementsByTagName("button");

// test print the buttons
// console.log(buttons);

// get the ID of button 1
// let button1 = document.getElementById("button");

// test print the button 1
// console.log(button1);

// test print the innertext of button 1
// console.log(button1.innerText);

// to create the function to change the innerText
// function button1func(){
//     if (button1.innerText == "Button 1"){
//         // change the text to clicked on each button
//         button1.innerText = "Click'd";
//         console.log("Button1 Clicked"); 
//     } else {
//         if (button1.innerText == "Click'd"){
//             button1.innerText = "Button 1";
//             console.log("Button1 Clicked Again");
//         }
//     }
// };

// // add an event listener and call the function
// button1.addEventListener('click', button1func);

// NOW we must learn how to loop through these
// for (var i = 0; i < buttons.length; i++){
//     // test print the buttons
//     console.log(buttons[i]);
//     const buttonsel = buttons[i].innerHTML;
//     console.log(buttonsel);
// }

// maybe do a function that loops through all the buttons and then does the if else shit
// function loopbuttons(){
//     for (var i = 0; i < buttons.length; i++){
//         // test print the buttons[]
//         // console.log(buttons[i]);
//         let allbuttons = buttons[i];
//         // change the text to clicked on each button
//         if (allbuttons.innerText == "Button") {
//             allbuttons.innerText = "Click'd";
//             console.log("Button Clicked");
//         } else {

//         } if (allbuttons.innerText == "Click'd"){
//             allbuttons.innerText = "Button";
//             console.log("Button Clicked Again");
//         }
//         console.log(allbuttons);
//         // add an event listener and call the function to all the buttons
//         // allbuttons.addEventListener('click', loopbuttons);
//     }
// };

// buttons.addEventListener('click', loopbuttons);


// prototype on how to create and loop through buttons by creating them in the DOM

    // querySelect the list 
    // const (theLIorDiv) = document.querySelector('.thelist');

    // create a variable as children of the querySelected list
    // const lis = (theLIorDiv).children;

    // create a function that creates the button passing through the tag name of location
    // function createBtn(liorDiv){
        // first create the element
        // const (theButtonName) = document.createElement('button');

        // then set the class name of the button
        // (theButtonName).className = 'buttonsclass';

        // append to the list
        // liorDiv.appendChild((theButtonName));

        // return the liorDiv
        // return liorDiv;
    // }

    // NOW set up a for loop for the button
    // for(var i = 0; i < lis.length; i++) {
    //     createBtn(lis[i]);
    // }


    // call the createBtn(action) in the function that creates the actual task div


    // ANOTHER POSS
        // FOR EACH

    /**
     * 

        The function Element.getElementsByTagName() returns a HTMLCollection of elements, you need to loop over it to bind the events.

        let li = document.getElementsByTagName("li");
        let buttons = document.getElementsByTagName("span");

        Array.from(buttons).forEach(b => {
        b.addEventListener("click", function() {
            console.log("clicked");
        });
        });
     */

