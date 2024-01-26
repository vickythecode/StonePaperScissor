let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.getElementById("msg")
const userScorePara=document.getElementById("user-score")
const compScorePara =document.getElementById("comp-score")




const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        msg.innerText=`You Win! Your ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor="green"
        userScore++;
        userScorePara.innerText=userScore;

    }
    else{
        msg.innerText=`You Lose ${compChoice} Beats ${userChoice}` 
        msg.style.backgroundColor="red"
        compScore++;
        compScorePara.innerText=compScore;
    }
}

const drawGame=()=>{
    msg.innerText="Game Was Draw Play Again!"
    msg.style.backgroundColor="#081b31"

}

const playgame=(userChoice)=>{
    console.log("userchoice= ",userChoice)
    const compChoice=genComChoice();
    console.log("compChoice= ",compChoice)
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor" ? false : true;
        }
        else{
            //scissor
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


const genComChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);  
    return option[randIdx];
}

 
choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("clicked",userChoice);
        playgame(userChoice);
    })
})

