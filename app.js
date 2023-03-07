let botScore = document.querySelector('.botScore p');
let userScore = document.querySelector('.userScore p');
let userDisplay = document.querySelector('.userDisplay');
let botDisplay = document.querySelector('.botDisplay');
let result = document.querySelector('.result');
let btn = document.querySelectorAll('button')
let game = document.querySelector('.game');

btn.forEach((btn) => {
    btn.addEventListener('click' , (e)=>{
        // let userChoice = userDisplay.innerHTML = e.target.id
        setTimeout(() => {
          let userChoice = userDisplay.innerHTML = e.target.id
           autoGenerateComputerChoice(userChoice);
           userDisplay.style.animation = 'null'
           botDisplay.style.animation = 'null'
           
        },1500)
        userDisplay.style.animation = 'bounceOne 2s ease'
        botDisplay.style.animation = 'bounceTwo 2s ease'
    })
});


function autoGenerateComputerChoice(userChoice){
    let choice = ['Paper' ,'Rock' , 'Scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    console.log(randomChoice)
    let computerChoice = choice[randomChoice];
    botDisplay.innerHTML = computerChoice;
    console.log(typeof(botScore.innerHTML))
   
    


    if(userChoice == 'Paper'){
        if(computerChoice == 'Rock'){
            result.innerHTML = 'You Win'
            result.style.color = 'green'
            game.style.border ='2px solid green'
         userScore.innerHTML++;
         if(Number(userScore.innerHTML) > 2){
                result.innerHTML = "You're Winner"
                userScore.innerHTML = 0
                botScore.innerHTML = 0
                setTimeout(()=>{
                    alert("Congratulation!")

                },500)

            }

            return

        }else if(computerChoice == 'Paper'){
            result.innerHTML = 'Draw'
            result.style.color = 'yellow'
            game.style.border ='2px solid yellow'
            return
        }
        else{
            result.innerHTML = 'You Lose'
            result.style.color = 'red'
            game.style.border ='2px solid red'
            botScore.innerHTML++;
            if(Number(botScore.innerHTML) > 2){
                result.innerHTML = "Game Over"
                userScore.innerHTML = 0
                botScore.innerHTML = 0
                setTimeout(()=>{
                    alert("Game Over")
                },500)

            }
  
            return
        }
    
    }

    if(userChoice == 'Rock'){
        if(computerChoice == 'Rock'){
            result.innerHTML = 'Draw'
            result.style.color = 'yellow'
            game.style.border ='2px solid yellow'
            
            return
            

        }else if(computerChoice == 'Paper'){
            result.innerHTML = 'You Lose'
            result.style.color = 'red'
            game.style.border ='2px solid red'
            botScore.innerHTML++;
            if(Number(botScore.innerHTML) > 2){
                result.innerHTML = "Game Over"
                userScore.innerHTML = 0
                botScore.innerHTML = 0
                setTimeout(()=>{
                alert("Game Over")
                },500)
            }
  
            return
        }
        else{
            result.innerHTML = 'You Win'
            result.style.color = 'green'
            game.style.border ='2px solid green'
            userScore.innerHTML++;
            if(Number(userScore.innerHTML) > 2){
                result.innerHTML = "You're Winner"
                userScore.innerHTML = 0
                botScore.innerHTML = 0
                setTimeout(()=>{
                    alert("Congratulation!")

                },500)
                
            }
            return
        }
    }

    if(userChoice == 'Scissors'){
        if(computerChoice == 'Scissors'){
            result.innerHTML = 'Draw'
            result.style.color = 'yellow'
            game.style.border ='2px solid yellow'
            return
        }else if(computerChoice == 'Rock'){
            result.innerHTML = 'You Lose'
            result.style.color = 'red'
            game.style.border ='2px solid red'
            botScore.innerHTML++;
            if(Number(botScore.innerHTML) > 2){
                result.innerHTML = "Game Over"
                userScore.innerHTML = 0
                botScore.innerHTML = 0
                setTimeout(()=>{
                    alert("Game Over")
                },500)


                
            }
            return
        }
        else{
            result.innerHTML = 'You Win'
            result.style.color = 'green'
            game.style.border ='2px solid green'
            userScore.innerHTML++;
            if(Number(userScore.innerHTML) > 2){
                result.innerHTML = "You're Winner"
                userScore.innerHTML = 0
                botScore.innerHTML = 0
                setTimeout(()=>{
                    alert("Congratulation!")
                    },500)
      

            }
            return
        }
    }

    
    

    

    

}






