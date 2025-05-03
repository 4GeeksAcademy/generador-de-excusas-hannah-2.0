window.onload = function () {
    function random(array) {
        return (Math.floor(Math.random() * array.length));
    }
    let who = ['La conexión a internet', 'Mi mamá', 'El tiempo', 'El trafico'];
    let action = ['no me dejo entrar a', 'interrumpió', 'canceló', 'entorpeció'];
    let what = ['la clase', 'la reunión', 'la junta', 'la llamada'];


    let excuse = who[random(who)] + " " + action[random(action)] + " " + what[random(what)] + ".";
    console.log(excuse)
    document.getElementById("excuse").innerHTML = excuse;
};