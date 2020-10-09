Math Flash Cards App

As a user, I want to see a clean interface that doesn't distract from the cards I'm learning from.
As a user, I want to be able to scroll through and flip cards with either a mouse or the keyboard.
As a user, I want to be able to record which cards I've gotten correct and which I'm missed.
As a user, I want to have the cards I've missed presented to me again after I've reached the end of the pile.
As a user, I want to know when I've correctly answered all of the cards in the pile.
As a user, I want to be able to reset the score and card pile to begin again.

Project Description
I plan to build a flash card app that can be used by children to learn basic math. The interface will be clean to keep distractions to a minimum with a selector for background colors to suit the taste of the user. The flash cards will display prominently on the screen with navigation buttons for moving back and forth in the pile and also flipping the cards for the correct answer. Parents will be able to mark each card as correct or incorrect so when the pile is depleted it will loop back to the cards marked incorrect and display them again until all cards have been marked correct.

Wire Frames
image
image

User Stories
As a user, I want to see a clean interface that doesn't distract from the cards I'm learning from.
As a user, I want to be able to scroll through and flip cards with either a mouse or the keyboard.
As a user, I want to be able to record which cards I've gotten correct and which I'm missed.
As a user, I want to have the cards I've missed presented to me again after I've reached the end of the pile.
As a user, I want to know when I've correctly answered all of the cards in the pile.
As a user, I want to be able to reset the score and card pile to begin again.

MVP Goals
Create a deck with 25 cards that have simple math equations on the front with answers on the back.
Make navigation between cards and flipping the card possible with both the mouse and the keyboard.
Create a scoring system.
Create a congratulations screen to mark deck completion (modal).
Reset button on congratulations screen.
Stretch Goals
Make a button that resets the score.
Create a button that toggles between numbers and numbers of items (goes from 5 to five apples)
Make the cards customizable for background color or maybe even an image.
Create a start screen that asks for the user's name so completion page is personalized
Create a way for users to add cards
Make it so the user can select from different sets of data (vocabulary with pictures instead of math)

<!-- Game play:

1. Show intro screen that explains how the game works (modal)
2. Show board with title, card, scores, and navigation buttons
3. Start game
   a. Show first card equation side up
   b. Correct set to false
4. Listen for clicks: flip card, reset game, forward, back, mark as correct
5. If a click is registered:
   a. Left arrow
    i. move one card back in pile
    ii. Update card number in the pile count
   b. Right arrow
    i. move one card forward in pile
    ii. Update card number in the pile count
   c. Flip card
    i. change card view to the back side showing the answer
   d. Correct
    i. mark as correct (maybe change the card border to green?)
    ii. update number correct count
    iii. check to see if end of pile is reached
        a. if no, move to next card
        b. if yes, are all cards marked correct?
            i. check if all cards are correct
                a. If no: return to earliest card that isn't marked correct
                b. If yes: modal to congratulate player with reset button on bottom
    vi. update card number in pile count -->
