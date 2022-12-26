const desc = document.querySelector ("textarea");

console.log (desc);

desc.addEventListener("keypress",function(e){

    const inputlength =desc.value.length;
    const maxChars = 130;

    if(inputlength >= maxChars) {
        e.preventDefault ();
        console.log ("Chegou no limite");
    }


});
