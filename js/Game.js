/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * Author-Daniel Ross*/

/**
 * Game Class
 * Hold the phrases, the active Phrase, and the lock control of the game.
 * Methods to:  start the game, get random quote, handle user interaction,
 *              manage lives, check for win, display game over, and clear the board.
 */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('Same Difference','Oxymoron'),
            new Phrase('Hall and Oates','Musical artists'),
            new Phrase('Frodo Baggins','Fantasy character'),
            new Phrase('Beagle','Dog Bread'),
            new Phrase('Toy Story','Pixar'),
            new Phrase('Cream Soda','Pop'),
            new Phrase('Hogwarts','School'),
            new Phrase('Brandon Sanderson','Author'),
            new Phrase('Samsung','Phone'),
            new Phrase('Baseball','Sport')
        ]
        this.activePhrase = null;
        this.active = false;
    }
    /**
     * Start a new game.
     * Unlock the game, get a new phrase, display the game board.
     */
    startGame(){
        this.active = true;
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('overlay').classList='start';
    }
    /**
     * Get a random phrase.
     * Ensure the new phrase is not a repeat.
     * @returns {Phrase} New activePhrase
     */
    getRandomPhrase(){
        let rand = Math.floor(Math.random() * this.phrases.length);
        if(this.activePhrase){
            let newPhrase = false;
            while(!newPhrase){
                if(this.phrases[rand]!==this.activePhrase){
                    newPhrase = true;
                } else {
                rand = Math.floor(Math.random() * this.phrases.length);
                }
            }
        }
        return this.phrases[rand];
    }
   
    /**
     * Handles any guess (keypress or button click)
     * Disables that guess, sets classes to display correct or wrong
     * Checks for win or reduces life total. 
     * @param {element} btn the button element clicked or associated with the keypress
     */
    handleInteraction(btn){
        if(this.active){
            const phrase = this.activePhrase;
            const letter = btn.textContent;
            btn.disabled = true;
            //console.log(btn); //debug to check key disable.
            if(phrase.checkLetter(letter)){
                phrase.showMatchedLetter(letter);
                btn.classList.add('chosen');
                if(this.checkForWin()){this.gameOver(true)}
            }else{
                btn.classList.add('wrong');
                this.removeLife();
            }
        }
    }
    /**
     * checks for win
     * @returns {boolean} returns if the game is won
     */
    checkForWin(){
        return (document.querySelectorAll('li.hide').length===0);
    }
    /**
     * reduces life total by one
     * triggers game over if applicable.
     */
    removeLife(){
        const lives = document.querySelectorAll('#scoreboard img');
        lives[this.missed].setAttribute('src','images/lostHeart.png');
        this.missed++;
        if(this.missed === 5){
            this.gameOver(false);
        }
    }
    /**
     * locks the game. Displays a win/lose message based on param. Trigger the game board clear.
     * @param {boolean} victory was the game over because of a win 
     */
    gameOver(victory){
        this.active = false;
        let message;
        let messageElement = document.getElementById('game-over-message') 
        let overlay = document.getElementById('overlay')
        overlay.style.display='';
        if(victory){
            overlay.classList='win start';
            message=`Winner! The phrase was "${this.activePhrase.toTitleCase()}"`;
        }else{
            overlay.classList='lose start';
            message=`Sorry out of lives. The phrase was "${this.activePhrase.toTitleCase()}"`;
        }
        messageElement.textContent=message;
        this.clearBoard();
    }
    /**
     * Clear the game board.
     * Removes letters, resets lives, unlock and reset all keys, reset Hint elements. 
     */
    clearBoard(){
        this.missed = 0;
        const phraseElement = document.querySelector('#phrase ul');
        while(phraseElement.firstChild) {
            phraseElement.removeChild(phraseElement.firstChild);
        }
        const livesElement = document.querySelectorAll('#scoreboard img');
        livesElement.forEach(element =>{
            element.setAttribute('src','images/liveHeart.png');
        })
        const keyElement = document.querySelectorAll('.key');
        keyElement.forEach(key =>{
            key.disabled = false;
            key.className = 'key';
        })
        const hint = document.querySelector('button.hint')
        hint.style.display = '';
        hint.nextElementSibling.style.display = 'none';
    }
}