// lets loop through the buttons to the console

// Lets use event delegation

// first get the buttons by PARENT id and event listener
document.getElementById("buttondiv").addEventListener("click", function(e) {
    if(e.target && e.target.id == "button2"){
        console.log(e.target.id + " was clicked");
    }
});
