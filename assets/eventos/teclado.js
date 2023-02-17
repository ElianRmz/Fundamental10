/*
document.addEventListener('keydown', callBack);
function callBack(evt){
    if(evt.keyCode ===65){
        alert("You pressed this key:'a'");
        return;
    } else {
    console.log(evt.keyCode);
    console.log(string.fromcharcode(evt.which));
    }
}*/

document.addEventListener('keyup', listaEventos);

function listaEventos(evt){
    document.getElementById("eventKey").innerHTML = evt.key;
    document.getElementById("eventCode").innerHTML = evt.code;
    document.getElementById("eventKeycode").innerHTML = evt.keyCode;
    //document.getElementById("eventWhich").innerHTML = evt.which;

    let from = String.fromCharCode(70)
    console.log(from)
    document.getElementById("eventWhich").innerHTMl =from
}

