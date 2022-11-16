let counter = 0;

function decrease(){
    counter = counter - 1
    document.getElementById('counter').innerHTML = counter;
}

function reset (){
    counter = counter * 0
    document.getElementById('counter').innerHTML = counter;


}


function increase(){
    counter = counter + 1
    document.getElementById('counter').innerHTML = counter;
}