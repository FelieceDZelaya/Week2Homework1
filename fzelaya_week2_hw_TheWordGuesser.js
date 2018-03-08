var lettersArray     = ['W', 'I', 'N', 'E'];
var lettersGuessed  = ['_', '_', '_', '_'];
var rewardAmount = 0;
var incorrectAnswerCounter = 0;

function guessLetter(aLetter) {

    var correctAnswer = false;
    var lettersRemain = false;
    
    if(incorrectAnswerCounter < 6){

        if(!lettersGuessed.includes(aLetter.toUpperCase())){

            for (var i = 0; i < lettersArray.length; i++) {

                if (aLetter.toUpperCase() == lettersArray[i].toUpperCase()) {
                    lettersGuessed[i] = aLetter.toUpperCase();
                    correctAnswer = true;
                }

                if(lettersGuessed.includes('_')) {
                    lettersRemain = true;
                }else{
                    lettersRemain = false;
                }
                
            }

            if (correctAnswer == true) {

                rewardAmount += 50;

                console.log(`Awesome champ, you guessed a letter! You have earned $${rewardAmount}`);
                console.log(lettersGuessed.join(''));
        
                if (lettersRemain == false) {
                    console.log(`Congrats! You have won $${rewardAmount}!`);
                } 
        
            } else {
                if(rewardAmount > 0){
                    rewardAmount -= 20;
                }
                incorrectAnswerCounter++;
                console.log(`Sorry, the word contains no ${aLetter.toUpperCase()}. Try again!`);
            }        

        }

    }else{
        console.log('Sorry, game over...');
    }
}

guessLetter('W');
guessLetter('W');
guessLetter('W');
guessLetter('W');
guessLetter('W');
guessLetter('e');
guessLetter('e');
guessLetter('e');
guessLetter('I');
guessLetter('x');
guessLetter('z');
guessLetter('n');