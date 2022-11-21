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
        firebaseTodo.push({todo});
        // test print the input
        // console.log(todo);
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
            // from the on functon ABOVE that is utilized on the firebase database
    function getTodo(todoitem){
        // test print todoitem
        console.log(todoitem);
        // test print todoitem value
        console.log(todoitem.val());
        // store the todoitem value in a variable
        var todos = todoitem.val();
        // create an array called data 
            // that is going to consist of the data to push to firebase
        var data = [];
        // NOW loop through the todos (input values) and push them into the 
            // data array
        Object.keys(todos).forEach(element => {
            // test print the todo item with it's key
            console.log('item ===', element, todos[element])
            // now push the id (element-keys) and item (todo) to the 
                // data array
            data.push({
                id: element,
                // item is value with id(key) set to the 'todo' name under the 
                    // firebase todo db list
                item: todos[element]['todo']
            })
        });
       // lets set a variable to get the keys of each todo item
       var keys = Object.keys(todoitem);
       // lets test print the keys and todos
       console.log(keys, todos);
    // if there is a todos-list div 
        // then change the innerHTML of the todos-list div
    if (document.getElementById('todos-list')){
        document.getElementById('todos-list').innerHTML = '';
    }
    // iterate through the todoitems entered
    for (let i = 0; i < data.length; i++) {
        // store the todos iteration in a variable
        var todosall = data[i];
        // test print
        console.log('todosall ===', todosall);

        // NOW we build the list elements below
            // so each time the form is submitted 
                // a separate todo element is created 
                    // so it can be manipulated individually
        
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
         // ABOVE you may need to assign an iterative id 
             // to correspond to each button

        // set it's value. Which is the input value 'todo' variable
                // you need to redefine 'todo' in this for loop
        todo_input_element.value = todosall.item;
        // set it's style I just wanted it wider may just make a css sheet
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
        // test print
        console.log(todo_edit_button);
        // set it's class
        todo_edit_button.classList.add('edit');
        // set it's id
        todo_edit_button.setAttribute('id', todosall.id);
        // set the innerText
        todo_edit_button.innerText = "EDIT";
        // test print
        console.log(todo_edit_button);

        // append edit button to the actions div
        todo_actions_div.appendChild(todo_edit_button);

        // DELETE BUTTON
        // create the delete button
        const todo_delete_button = document.createElement('button');
        // test print 
        console.log(todo_delete_button);
        // set it's class
        todo_delete_button.classList.add('delete');
        // set the innerText
        todo_delete_button.innerText = "DELETE";
        // set it's id to the retrieved fb item's key/id
            // here is where the key for fb item is located
        todo_delete_button.setAttribute('id', todosall.id);

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
            // store the id in a variable that is the target of event (the key)
            let id = e.target.id;
            // check the text in order to change it
            if (todo_edit_button.innerText.toLowerCase() === "edit"){
                // test print text with the id
                console.log("edit button pressed", id);
                // change the innerText
                todo_edit_button.innerText = "SAVE";
                // remove the readonly attribute from the input field so you can edit the field
                todo_input_element.removeAttribute('readonly', true);
                // place the cursor inside the field to be edited
                todo_input_element.focus();
            } else {
                // check the text in order to change it
                if (todo_edit_button.innerText.toLowerCase() === "save"){
                    // test print text with the id
                    console.log("save button pressed", id);
                    // change the innerText
                    todo_edit_button.innerText = "EDIT";
                    // set the readonly attribute to the input field so you can't edit
                    todo_input_element.setAttribute('readonly', true);
                    // NOW save the change to firebase
                     // NOW keep the edit in firebase
                    let updated = todo_input_element.value;
                    // // test print
                    console.log(updated, id);
                    // test print db + updated element
                    console.log(firebaseTodo, "firebaseTodo/" + updated);
                    // NOW edit in firebase
                        // locate the firebase reference by each item id
                            // apply the update function
                    firebase.database().ref(`firebasetodo/${id}`).update({
                        // the todo item and by the todo_input_element's value
                        todo: updated
                    });
                }
            }
        });

        // CROSS BUTTON
            // this is where you:
                // change the style to line through and then back again
        // add event listener
        todo_cross_button.addEventListener('click', (e) => {
            // if statement to check for innerText of cross button
            if (todo_cross_button.innerText.toLowerCase() === "cross-off"){
                // test print text here you don't need the id
                console.log("cross button pressed");
                // change the innerText of the cross off button to uncross
                todo_cross_button.innerText = "UNCROSS";
                // change the CSS
                todo_input_element.style.textDecoration = "line-through";
                // eliminate the edit button
                todo_edit_button.style.display = "none";
            } else {
                // if statement to check for innerText of cross button
                if (todo_cross_button.innerText.toLowerCase() === "uncross"){
                    // test print text here you don't need the id
                    console.log("uncross button pressed");
                    // set innerText of the uncross button back to cross
                    todo_cross_button.innerText = "CROSS-OFF";
                    // unset the line-through style
                    todo_input_element.style.textDecoration = "none";
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
            e.stopPropagation();
            // store the id in a variable that is the target of event
            let id = e.target.id;
            // test print the delete button
            console.log("delete button pressed", id);
            // remove the child input from the content div
            todo_list_element.removeChild(todo_div);
            // NOW to remove the data element from firebase
                // first referenct the database and the actual database list and key
                console.log("Here is the DB");
                console.log(firebaseTodo);
                // find the specific todo in this firebase function
                    // Below gives you the innerText value of the db object
                        // and it's correspoding key
                        firebaseTodo.orderByValue().on('child_added', function(snapshot){
                            console.log(snapshot.val(), snapshot.key);
                        });
                // test print the location in the db
                console.log(`firebasetodo/${id}`);
                // NOW delete in firebase by id
                firebase.database().ref(`firebasetodo/${id}`).remove();
        });
    }

    }

    // create the errTodo function
        // pass the arg err
        function errTodo(err) {
            console.log(err);
        }

}); 

 