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
        firebaseTodos.push({todo});
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
        // create a variable for the delivs iteration
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

        
    }

    }

    // create the errTodo function
        // pass the arg err
        function errTodo(err) {
            console.log(err);
        }

}); 

 