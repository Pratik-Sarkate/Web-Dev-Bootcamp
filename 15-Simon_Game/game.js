let buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickedPattern = [];


let level = 0;
let started = false;

$(document).on("keydown", function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
})

$(".btn").on("click", function(event){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1)

});

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("matched");

        if(userClickedPattern.length === gamePattern.length){
            
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
    
}

function startOver(){
    gamePattern = [];
    level = 0;
    started = false;
}

function nextSequence(){

    userClickedPattern = [];

    level++;
    // console.log(level);
    $("#level-title").text("Level "+level);


    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

    

}

function playSound(name){
    let audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");
    setTimeout(()=>{
        $("#"+currentColor).removeClass("pressed");
    },100);
}






/*
Other logic:
$(".btn").on("click", function(event){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    if(started){

        let currInd = userClickedPattern.length - 1;
        let isSame = checkAnswer(currInd);
        if(!isSame){
            $("#level-title").text("Game Over");
            started = false;
            gamePattern = [];
            userClickedPattern = [];
            level = 0;
            setTimeout(function (){
                $("#level-title").text("Press A Key to Start");
            },1000);
            console.log("Game Over");
        }

        console.log(gamePattern);
        console.log(userClickedPattern);
        if(isSame && currInd === (gamePattern.length - 1)){
            setTimeout(function(){
                nextSequence();
            },1000);
            userClickedPattern = [];
        }
        
    }

});

function checkAnswer(index){

    if(gamePattern[index] === userClickedPattern[index]){
        return true;
    }else{
        return false;
    }
}

*/