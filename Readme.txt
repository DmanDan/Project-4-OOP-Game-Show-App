This app is a take on the game "Hangman". 
This was created for the Team Treehouse Fullstack Javascript techdegree course.
Inputs are an onscreen keyboard or physical keyboard key presses.
Each phrase contains a hint that can be viewed by clicking the hint button during a game.
On win (completed phrase) or lose (5 incorrect guesses). A game over screen displays the correct answer.
The game can be restarted by pressing enter or clicking the new game button displayed on screen.

Some CSS patterns found at: https://bansal.io/pattern-css#installation.
Script to convert string to titleCase was modified from a post found at: https://stackoverflow.com/a/5574446





To improve key selection visibility for me:
    Unpicked keys have been darkened while text has been brightened
    Correct keys have been brightened/saturated a bit,
    Incorrect keys have been darkened with a pattern added.

    Fill pattern found at https://bansal.io/pattern-css#installation.
    
    Changes Below:
    :root {
        --color-keys: #ffffff;
        --color-keys-dark: #595959;
    }

    .wrong {
        background: rgb(140, 110, 56);
        background-image: repeating-linear-gradient(45deg, black 0, black 1px, transparent 0, transparent 50%);
        background-size: 10px 10px;
    }
    .chosen {
        background: #4b5ba9;
    }

To improve phrase visibility for me:
    increased space width,
    increased letter padding,
    darkened empty spaces,
    darkened correct spaces,

    Changes Below:

    .letter {
        margin-right: 7px;
    }
    .space {
        width: 30px;
    }
    .show {
    background-color: #1b92a7;
    margin-right: 7px;
    }
    .hide{
        background-color: grey;
    }

To avoid highlighting the solution:
    if a letter is selected while its supposed to be hidden
    the highlight has been made transparent
    
    Changes Below:
    
    .letter.hide::selection{
        color: transparent;
    }

HTML Changes:
    added button and h1 class to the banner div to enable a hint option.

            <div id="banner" class="section">
				<h2 class="header">Phrase Hunter</h2>
				<button class="hint">Show Hint</button>
				<h1 class="hint">Hint: Oxymoron</h1>
			</div>