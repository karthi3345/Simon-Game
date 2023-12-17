const buttonColors= ["red","green","blue","yellow"];

let gamePattern =  [ ];  //sys generated color
let userClickedPattern =[ ] ;// user clicked colors

let  started= false;
let level=0;


document.addEventListener("keypress",()=>{
    if(!started){
        document.getElementById("level-title").innerText=
        `Level ${level}`;
        started=true
        nextSequence()
        
    }
})

document.querySelectorAll(".btn").forEach((item)=>{
  item.addEventListener("click",(event)=>{
    let userChoosenColor =event.target.id
    userClickedPattern.push(userChoosenColor)
    animatePress(userChoosenColor)
    playSound(userChoosenColor);
    checkAnswer(userClickedPattern.length-1)
   
  })
})
function checkAnswer(currentlevel){
    if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(()=>{
               nextSequence()
            },1000)
        }
     }
     else{
        playSound("wrong")
        document.getElementById("level-title").innerText="Game Over! press any key to start";
     }

}
function  fadeIn(time,id){
    let fade=document.getElementById(id)
    setTimeout(()=>{
        fade.style.opacity=0.1

    },time)

}
function  fadeOut(time,id){
    let fade=document.getElementById(id)
    setTimeout(()=>{
        fade.style.opacity=1
    },time)
}



function nextSequence(){
    //when i call this function user   clicking and user clixk as empty user pogumpothu previous irukuratha empty akunathan next pogamudiyum
    userClickedPattern=[];
    level++;
    document.getElementById("level-title").innerText=
        `Level ${level}`;



        //random sing we using random function

        let randomNumber=Math.floor(Math.random()*4)
        let randomChoosenColor=buttonColors[randomNumber]
        console.log(randomChoosenColor)
        gamePattern.push(randomChoosenColor)
        playSound(randomChoosenColor);
        fadeIn(200, randomChoosenColor)
        fadeOut(500, randomChoosenColor)
        

}


function playSound(name){
    let audio= new Audio("Sounds/"+name+".mp3")
  audio.play()
}
function animatePress(currentColor){
    document.getElementById(currentColor).classList.add("pressed")
    setTimeout(()=>{
        document.getElementById(currentColor).classList.remove("pressed")
    },200)
}