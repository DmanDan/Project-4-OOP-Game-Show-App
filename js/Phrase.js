/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * Author-Daniel Ross*/

/**
 * Phrase Class
 * Hold the phrase
 * Methods to:  display the phrase, check guess, display matches, convert a guess to title case
 * @constructor 
 * @param {string} phrase   The phrase to be guessed. 
 * @param {string} hint     A hint to be displayed for the phrase
 */
class Phrase{
    constructor(phrase,hint){
        this.phrase = phrase.toLowerCase();
        this.hint = hint
    }
    /**
     * Creates the HTML list item for each letter in the phrase.
     * Update the hint text with the phrases hint.
     */
    addPhraseToDisplay(){
        const displayElement = document.querySelector('#phrase ul');
        const hint = document.querySelector('h1.hint')
        this.phrase.split('').forEach( letter => {
            let li = document.createElement('li');
            li.innerHTML= letter;
            if(letter === ' '){
                li.className = 'space';
            } else {
                li.className= `hide letter ${letter}`;
            }
            displayElement.appendChild(li)
        })
        hint.textContent=`Hint: ${this.hint}`;
        hint.style.display = 'none';
    }
    /**
     * Checks a guess against the phrase.
     * @param {string} letter the guessed letter.
     * @returns {boolean} Was the guess in the phrase?
     */
    checkLetter(letter){
        return this.phrase.includes(letter)
    }
    /**
     * Display any list items that match the guessed letter.
     * @param {string} letter 
     */
    showMatchedLetter(letter){
        let matches = document.querySelectorAll(`li.${letter}`);
        matches.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');
        });
    }
    /**
     * Purely to display the final message in title case.
     * Slightly modified script from:
     * https://stackoverflow.com/a/5574446
     * @returns {string} the phrase in title case
     */
    toTitleCase() {
        return this.phrase.replace(/\w\S*/g,(phrase) => {
            return phrase.charAt(0).toUpperCase() + phrase.substr(1).toLowerCase();
        });
      }
}