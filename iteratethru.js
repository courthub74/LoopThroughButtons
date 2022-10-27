// Set up the good morning message when button pressed
let goodmorning=(message, bgcolor, color) => {
    let msg = document.querySelector("#one");
    msg.innerText = message;
    msg.style.backgroundColor=bgcolor;
    msg.style.color = color;
}

// NOW button 1
let first = document.querySelector("#one");
first.addEventListener('click', function() {
    // call the global v goodmorning
    goodmorning('Good morning', 'red', 'black');
})