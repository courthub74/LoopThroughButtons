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

        // create the "todos" div
        const todo_div = document.createElement('div');

        // add the class to the div
        todo_div.classList.add('todos');

        // create "content" div
        const todo_content_div = document.createElement('div');
        
        // add the class to the div
        todo_content_div.classList.add('content');

        // append the "todos" div to the "content" div
        todo_div.appendChild(todo_content_div);

        // create the input element that's going to be inside of the content
            // which is actually a display of the output
                // but you need to set as readonly so ....
        

    })
});