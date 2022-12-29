
let but = document.querySelector(".start");
let lamp = document.querySelector(".lamp");
let audios = new Audio("img/sound.mp3");

let inter = null;

but.onclick = function(){

function test(){
    let mas =["img/phon1.png", "img/phon2.png"];
    for(let i in mas){
        let ran = Math.floor(Math.random()*mas.length);
        lamp. src = mas[ran];
}
 }

if(!inter){
    inter = setInterval(test, 100);
}
else if(inter){
clearInterval(inter);
lamp.src = "img/phon.png";
inter = null

}

if(audios.paused == true){
    audios.play();
}
else{
    audios.pause();
}

audios.volume = 0.3;
};

