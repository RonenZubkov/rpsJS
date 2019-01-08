'use strict';
/* Init */
$( document ).ready(function() {

    /* Globals (Should start with letter g at the beginning*/
    let rps = ['rock','paper', 'scissors'];
    let counter = 0;
    let maxLimit = 5;
    let answer;

    /*Score board*/
    let score = {
        'Computer': 0,
        'User': 0
    };

    /* Generate Random Num */
    let randomResponse = (min , max) =>{
            let random_number = Math.random() * (max-min) + min;
            return Math.floor(random_number);
    };

    /* Promt */
    let question = () => {
        answer = prompt('choose:').toLowerCase();
    };

    /* Comparing Answers */
    let compareAnswer = () =>{

        let random = (randomResponse(0,3));
        if (rps[random] === answer){
            /* Tie, no login needed besides ugly printing*/
            console.log('TIE! ', counter);
        }

        else{
            /* Switch for Game Rules */
            switch (rps[random]) {
                case 'rock':
                    if (answer === 'paper'){
                        score.User++;
                        /* Some Ugly printing */

                        console.log('You Won!');
                        console.log('Computer Score: ',score.Computer,'User Score: ',score.User );
                        break;

                    }else{
                        score.Computer++;
                        /* Some Ugly printing */

                        console.log('You lost!');
                        console.log('Computer Score: ',score.Computer,'User Score: ',score.User );
                        break;
                    }

                case 'scissors':
                    if (answer === 'paper') {
                        score.Computer++;

                        /* Some Ugly printing */
                        console.log('You Lost!');
                        console.log('Computer Score: ',score.Computer,'User Score: ',score.User );
                        break;
                    }else{
                        score.User++;
                        console.log('You Won!');
                        console.log('Computer Score: ',score.Computer,'User Score: ',score.User );
                        break;
                    }

                case 'paper':
                    if (answer === 'rock') {
                        score.Computer++;
                        /* Some Ugly printing */
                        console.log('You Lost!');
                        console.log('Computer Score: ',score.Computer,'User Score: ',score.User );
                        break;
                    }else {
                        score.User++;
                        /* Some Ugly printing */
                        console.log('You Won!');
                        console.log('Computer Score: ',score.Computer,'User Score: ',score.User );
                        break;
                    }
            }
        }
    };

    while(counter < maxLimit){
        /* if iSWon */
        if (score.User === 5) {
            break;
        }

        /*Not Won? Routine*/
        else{
            question();
            compareAnswer();
            counter++;
        }
    }
});



