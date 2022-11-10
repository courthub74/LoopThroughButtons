// Load the whole page
// add an eventlistener to it

    // in the page, 
    // give the form an event listener through the submit button
        // in here create everything output wise
    
    // Then it should set everything one at a time

// HERE WE GO

// whole page
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this
    const form = document.querySelector("#new-fill");
    // queryselect the input field
    const input = document.querySelector("#new-fill-input");
    // queryselect the output field
    const todo_list_element = document.querySelector("#todos-list");

    // NOW populate the list element upon the submit button
    form.addEventListener('submit', (e) => {
        // keeps page from refreshing
        e.preventDefault();

        // test print the submit button
        console.log("Todo Submitted");

        // get the value of the 'input' variable above and store it in another variable
            // get the input by id
       
        const todo = input.value;

        // test print input value
        


        // Error handling
        if (!todo) {
            alert("Please fill out the Todo");
            return;
        }


        // TODOS DIV
        // create the "todos" div
        const todo_div = document.createElement('div');

        // add the class to the div
        todo_div.classList.add('todos');

        // append the todo div to the todos-list div
        todo_list_element.appendChild(todo_div);



        // CONTENT DIV
        // create "content" div
        const todo_content_div = document.createElement('div');
        
        // add the class to the div
        todo_content_div.classList.add('content');

        // append the content div to the todos div 
        todo_div.appendChild(todo_content_div);



        // INPUT ELEMENT
        // create the input element that's going to be inside of the content
            // which is actually a display of the output
                // but you need to set as readonly so ....
        const todo_input_element = document.createElement('input');
        // set it's class
        todo_input_element.classList.add('text');
        // set it's type
        todo_input_element.type = "text";
        // set it's id
        todo_input_element.id = "input";
        // set it's value. Which is the input value 'todo' variable
        todo_input_element.value = todo;
        // set it's attribute
        todo_input_element.setAttribute('readonly', true);

        // append the input element to the content div
            // which was appended to the todos div earlier
        todo_content_div.appendChild(todo_input_element);

        // HERE IS WHERE YOU CAN SEND AND RENDER TO/FROM FIREBASE

        // ACTION ELEMENT
        // this is the bar of buttons (edit, delete, cross-off)
        const todo_actions_div = document.createElement('div');
        // set it's class
        todo_actions_div.classList.add('actions');

        // append the actions div to the todos div
            // REMEMBER parent first and then appendChild to it
        todo_div.appendChild(todo_actions_div);


        // EDIT BUTTON
        // create the edit button
        const todo_edit_button = document.createElement('button');
        // set it's class
        todo_edit_button.classList.add('edit');
        // set the inner text
        todo_edit_button.innerText = "EDIT";

        // DELETE BUTTON
        // create the delete button
        const todo_delete_button = document.createElement('button');
        // set it's class
        todo_delete_button.classList.add('delete');
        // set the inner text
        todo_delete_button.innerText = "DELETE";

        // CROSS BUTTON
        // create the cross button
        const todo_cross_button = document.createElement('button');
        // set it's class
        todo_cross_button.classList.add('cross');
        // set the inner text
        todo_cross_button.innerText = "CROSS-OFF";

        // append the buttons to the actions div
            // which was appended to the todos div earlier
        todo_actions_div.appendChild(todo_edit_button);
        todo_actions_div.appendChild(todo_delete_button);
        todo_actions_div.appendChild(todo_cross_button);


        // now reset input value to blank after button clicked
        input.value = '';


        // EVENT LISTENER TIME

        // CLEAR THE FORM
        // get id of the submit button
        // addeventlistener that says
            // todo.value = '';

        // EDIT BUTTON
            // this is where you:
                // set the innertext change on the button
                // toggle the readonly attribute
                // edit the changes in firebase
        todo_edit_button.addEventListener('click', (e) => {
            // if statement to check for innerText of edit button
            if (todo_edit_button.innerText.toLowerCase() === "edit"){
                // test print
                console.log("edit button pressed");
                // change the innerText
                todo_edit_button.innerText = "SAVE";
                // remove the readonly attribute from the input field so you can edit the field
                todo_input_element.removeAttribute('readonly', true);
                // place the cursor inside the field to be edited
                todo_input_element.focus();
            } else {
                // if statement to check for innerText of save button
                if (todo_edit_button.innerText.toLowerCase() === "save"){
                    // test print
                    console.log("save button pressed");
                    // change the innerText
                    todo_edit_button.innerText = "EDIT";
                    // set the readonly attribute to the input field so you can't edit
                    todo_input_element.setAttribute('readonly', true);
                }
            }
        });


        // CROSS BUTTON
            // this is where you:
                // change the style to line through and then back again
        todo_cross_button.addEventListener('click', (e) => {
            // if statement to check for innerText of cross button
            if (todo_cross_button.innerText.toLowerCase() === "cross-off"){
                // test print
                console.log("cross button pressed");
                // change the innerText of the cross off button to uncross
                todo_cross_button.innerText = "UNCROSS";
                // get the input by id store in in a variable (just in case for now)
                let input_element = document.getElementById("input");
                // test print 
                console.log(input_element);
                // set style to line-through
                input_element.style.textDecoration = "line-through";
                // eliminate the edit button
                todo_edit_button.style.display = "none";
            } else {
                // if statement to check for innerText of cross button
                // set innerText of the uncross button back to cross
                // scrap the Edit button
                    // style.display to none and then to block
                if (todo_cross_button.innerText.toLowerCase() === "uncross"){
                    // test print
                    console.log("uncross button pressed");
                    // change the innerText of the uncross button back to cross-off
                    todo_cross_button.innerText = "CROSS-OFF";
                    // get the input by id store in in a variable (just in case for now)
                    let input_element = document.getElementById("input");
                    // unset the line-through style 
                    input_element.style.textDecoration = "none";
                    // bring the edit button back
                    todo_edit_button.style.display = "block";
                }
            }
        });

        // DELETE BUTTON
            // this is where you:
                // remove the input element from the display
                // remove the data element from firebase
        todo_delete_button.addEventListener('click', (e) => {
            // test print the delete button
            console.log("delete button pressed");
            // remove the child input from the content div
            todo_content_div.removeChild(todo_input_element);
        });
    });
});