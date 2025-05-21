window.onload = function () {
    function getRandomIndex(array) {
        return (Math.floor(Math.random() * array.length));
    }
    
    const subjects = ['La conexión a internet', 'Mi mamá', 'El tiempo', 'El tráfico'];
    const actions = ['no me dejó entrar a', 'interrumpió', 'canceló', 'entorpeció'];
    const events = ['la clase', 'la reunión', 'la junta', 'la llamada'];

    const randomSubject = subjects[getRandomIndex(subjects)];
    const randomAction = actions[getRandomIndex(actions)];
    const randomEvent = events[getRandomIndex(events)];

    const excuse = `${randomSubject} ${randomAction} ${randomEvent}.`;
    console.log(excuse)
    document.getElementById("excuse").innerHTML = excuse;
};