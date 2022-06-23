let keys = document.getElementsByClassName('key');
keys[generateRandomIndex()].className = "key jiggle";

document.addEventListener('keydown', (event) => {
    let keyPressed = event.key;
    for(let i=0; i<keys.length; i++){
        let key = keys[i];
        if(key.className == "key jiggle" && keyPressed.toUpperCase() == key.dataset.key.toUpperCase()){
            key.className = "key";
            keys[generateRandomIndex()].className = "key jiggle";
        }
    }
}, false);

function generateRandomIndex(){
    return Math.floor(Math.random() * (53));
}



