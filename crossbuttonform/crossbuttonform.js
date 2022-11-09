// Load the whole page
// add an eventlistener to it

    // in the page, 
    // give the form an event listener
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
        const todo = input.value;

        // Error handling
        if (!task) {
            alert("Please fill out the Todo");
            return;
        }


        // TODOS DIV
        // create the "todos" div
        const todo_div = document.createElement('div');

        // add the class to the div
        todo_div.classList.add('todos');

        // append to the todos-list div
        todo_list_element.appendChild(todo_div);


        
        // CONTENT DIV
        // create "content" div
        const todo_content_div = document.createElement('div');
        
        // add the class to the div
        todo_content_div.classList.add('content');

        // append the "todos" div to the "content" div
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
        // set it's value. Which is the input value 'todo' variable
        todo_input_element.value = todo;
        // set it's attribute
        todo_input_element.setAttribute('readonly', true);

        // append the input element to the content div
            // which was appended to the todos div earlier
        todo_content_div.appendChild(todo_input_element);



        // ACTION ELEMENT
        // this is the bar of buttons (edit, delete, cross-off)
        todo_actions_div = document.createElement('div');
        // set it's class
        todo_actions_div.classList.add('actions');


        // EDIT BUTTON
        // create the edit button
        const todo_edit_button = document.createElement('button');
        // set it's class
        todo_edit_button.classList.add('edit');
        // set the inner text
        todo_edit_button.innerText = "Edit";

        // DELETE BUTTON
        // create the delete button
        const todo_delete_button = document.createElement('button');
        // set it's class
        todo_delete_button.classList.add('delete');
        // set the inner text
        todo_delete_button.innerText = "Delete";

        // CROSS BUTTON
        // create the cross button
        const todo_cross_button = document.createElement('button');
        // set it's class
        todo_cross_button.classList.add('cross');
        // set the inner text
        todo_cross_button.innerText = "Cross-Off";


    });
});