/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Author-Daniel Ross*/


const game = new Game();
/**
 * Listen for a click on the start button.
 * run the game.
 */
document.getElementById('btn__reset').addEventListener('click',()=>game.startGame());
/**
 * Listen for a click on any key button.
 * run the interaction handler.
 */
document.querySelectorAll('button.key').forEach(btn =>{
    btn.addEventListener('click',(e)=>game.handleInteraction(e.target))
})
/**
 * Listen for a keydown event.
 * if the gameboard is inactive and the keydown was enter, run the game.
 * If the keydown was a guess, find the button element that corresponds to the keypress and run the interaction handler.
 */
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'&&!game.active){
        game.startGame();
    }else{
        const keys = document.querySelectorAll('.key');
        keys.forEach(key=>{
            if (key.textContent === e.key){
                if(!key.disabled){game.handleInteraction(key)}
            }
       });
    }
});