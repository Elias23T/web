onload = () =>{
    document.body.classList.remove("container");
};
document.body.addEventListener('click', function() {
    var music = document.getElementById('myMusic');
    music.play();
});