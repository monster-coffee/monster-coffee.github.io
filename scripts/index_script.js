
var counter  =0 ;
var text = "Yashdeep";
var speed = 500;

function typer(){
if(counter<text.length){

    document.getElementById("name").innerHTML+=text.charAt(counter);

    counter++;
    setTimeout(typer,speed);
}
}

