let audioList = new Array();
for(let i=0; i<23; i++){
    audioList.push(new Audio(`audio/key-${i+1}.mp3`));
}

let whiteKeys = document.getElementsByClassName("white-keys");
for(let i=0; i<whiteKeys.length; i++){
    let whiteKey = whiteKeys[i];
    whiteKey.addEventListener("click", function(){
        console.log("Hovered")
        audioList[i].play()
    });
}

let blackKeys = document.getElementsByClassName("black-keys");
for(let i=0; i<blackKeys.length; i++){
    let blackKey = blackKeys[i];
    blackKey.addEventListener("click", function(){
        console.log("Hovered")
        audioList[i+13].play()
    });
}



