// Try event delegation

document.getElementById("parent").addEventListener("click", function(e) {
    // e.target is the clicked element
    //check if button1menu has been clicked
    if(e.target && e.target.id == "button1"){
        console.log("button 1 click'd");
    }
})