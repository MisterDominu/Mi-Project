let input = document.querySelector("#text");
let buton = document.querySelector(".but");

buton.addEventListener("click", function(){
  let div = document.createElement('div');
  let but = document.createElement("button");
  but.innerHTML = "готово";
  but.className = "bu";
  div.className = "quest"
  let pis = input.value;
  div.innerHTML = pis;
  document.body.append(div, but);
  but.addEventListener("click", function(){div.remove(); but.remove();})
  if(buton.click){
    input.value = "";
  }
  
  let audio = new Audio('img/sound.mp3');
  audio.play();
})

