// JS for the crossbutton done as a form

// lets set up firebase
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
var firebaseTodo = firebase.database().ref("firebasetodo");

// test print
console.log("Here is the DB");
console.log(firebaseTodo);

// NOW lets set up the page

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
        console.log("ToDo Submitted");

        // get the value of the 'input' variable above and store it in another variable
            // get the input by id
        const todo = input.value;

        // Error handling
            // if no value entered just alert
        if (!todo) {
            alert("Please fill out the Todo field");
            return;
        }

        // clear the input field
        input.value = '';

        // TO DATABASE
        // NOW this is where we push the todo variable to the firebaseTodo db reference
        firebaseTodo.push(todo);
        // test print the input
        console.log(todo);
    });

    // FROM DATABASE

    // test print the firebase object
    console.log(firebaseTodo);

    // utilize the on function on the db reference
    // based on value
    // pass getTodo and errTodo functions
        // getData locates fb db
        // errData test for errors
            // i.e. permissions, other blocks
    firebaseTodo.on('value', getTodo, errTodo);

    // create the getTodo function
        // pass the arg 'todoitem'
    function getTodo(todoitem){
        // test print the value of the arg
        console.log(todoitem.val());
        // store the value in a variable
        var todos = todoitem.val();
        // set variable to get the keys of each task
        var keys = Object.keys(todoitem);
        // test print the keys
        console.log(keys);
        // iterate through the todoitems entered
        for(let i in todos){
            // create a variable for the delivs iteration
            var todosall = todos[i];
            // test print
            console.log(todosall);

            // start building the list elements 
                // in the for loop for each one

            
            // TODOS DIV

            // create the 'todos' div
            const todo_div = document.createElement('div');

            // test print it
            console.log(todo_div);

            // add the class to the div
            todo_div.classList.add('todos');

            // append the todo div to the todos-list
            todo_list_element.appendChild(todo_div);


            // CONTENT DIV

            // create the 'content' div 
                // this is setup as an input that displays the output
            const todo_content_div = document.createElement('div');

            // test print it
            console.log(todo_content_div);

            // add the class to the div
            todo_content_div.classList.add('content');

            // append the content div to the todo div
            todo_div.appendChild(todo_content_div);


            // INPUT ELEMENT
            // create the input element that's going to be inside of the content
            // which is actually a display of the output
                // but you need to set as readonly so ....
            const todo_input_element = document.createElement('input');

            // test print it
            console.log(todo_input_element);

            // add it's class
            todo_input_element.classList.add('input');
            // set it's type
            todo_input_element.type = "text";
            // set it's id
            todo_input_element.id = "input";
            // set it's value. Which is the input value 'todo' variable
                // you need to redefine 'todo' in this for loop
            todo_input_element.value = todosall;
            // set it's style
            todo_input_element.style.width = "300px";
            // set it's attribute
            todo_input_element.setAttribute('readonly', true);

            // append the input element to the content div
                 // which was appended to the todos div earlier
            todo_content_div.appendChild(todo_input_element);


            // ACTION ELEMENT
            // this is the bar of buttons (edit, delete, cross-off)
            const todo_actions_div = document.createElement('div');
            // test print
            console.log(todo_actions_div);
            // set it's class
            todo_actions_div.classList.add('actions');

            // append the actions div to the todos div
                // REMEMBER parent first and then appendChild to it
                    // this is separate from the input on the todos div
            todo_div.appendChild(todo_actions_div);

            // EDIT BUTTON
            // create the edit button
            const todo_edit_button = document.createElement('button');
            // set it's class
            todo_edit_button.classList.add('edit');
            // set the innerText
            todo_edit_button.innerText = "EDIT";
            // test print
            console.log(todo_edit_button);

            // append edit button to the actions div
            todo_actions_div.appendChild(todo_edit_button);

            // DELETE BUTTON
            // create the delete button
            const todo_delete_button = document.createElement('button');
            // set it's class
            todo_delete_button.classList.add('delete');
            // set the innerText
            todo_delete_button.innerText = "DELETE";
            // test print
            console.log(todo_delete_button);

            // append delete button to the actions div
            todo_actions_div.appendChild(todo_delete_button);

            // CROSS OFF BUTTON
            // create the cross off button
            const todo_cross_button = document.createElement('button');
            // set it's class
            todo_cross_button.classList.add('cross');
            // set the innerText
            todo_cross_button.innerText = "CROSS-OFF";
            // test print
            console.log(todo_cross_button);

            // append cross button to the actions div
            todo_actions_div.appendChild(todo_cross_button);

            // now reset input value to blank after button clicked
                // you access the queried input field, not the todo value
            input.value = '';


            // EVENT LISTENER TIME

            // EDIT BUTTON
            // this is where you:
                // set the innertext change on the button
                // toggle the readonly attribute
                // edit the changes in firebase
            todo_edit_button.addEventListener('click', (e) => {
                if (todo_edit_button.innerText.toLowerCase() === "edit") {
                // test print
                console.log("edit button pressed");
                    // change the innerText
                    todo_edit_button.innerText = "SAVE";
                    // remove the readonly attribute from the input field so you can edit the field
                    todo_input_element.removeAttribute('readonly', true);
                    // place the cursor inside the field to be edited
                    todo_input_element.focus();
                } else {
                    if (todo_edit_button.innerText.toLowerCase() === "save") {
                    // test print
                    console.log("save button pressed");
                    // change the innerText
                    todo_edit_button.innerText = "EDIT";
                    // set the readonly attribute to the input field so you can't edit
                    todo_input_element.setAttribute('readonly', true);
                    // NOW save the change to firebase
                     // NOW keep the edit in firebase
                    // store value of the input in a variable
                        // todosall
                        let items = document.getElementById("input");
                        // test print (ONLY GETS THE FIRST ONE)
                            // JUST LEARN THE WHOLE THING
                        console.log(items.value);
                        // reference the database
                        // and replace the old value with the new one
                        // firebase.ref('firebasetodo/').push(items);
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
                    // get the input by id and store in a variable (just in case)
                        // get the multiple elements 
                            // loop through
                    var input_element = document.querySelectorAll("#input");
                    // 4 loop
                    for (i = 0; i < input_element.length; i++){
                        input_element[i].style.textDecoration =  "line-through";
                        // how do I make this apply to the only line its on
                    }
                    // for each all of them
                    // input_element.forEach()
                    // test print 
                    console.log(input_element);
                    // change the style to line through
                    input_element.style.textDecoration = "line-through";
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
            // NOW to remove the data element from firebase
                // first referenct the database and the actual database list and key
            firebaseTodo.ref('firebasetodo/' + keys).remove();
            });
        };
    }

    // create the errTodo function
    function errTodo(err){
        console.log(err);
    }
});