# Naves

A simple videogame in order to practice and learn Javascript.

## File structure

- App.js this is the file that has the majority of code and logic.

- Index.html only has a basic structure of HTML and the canvas tag to draw.
- Estilos.css just modify the background of the body and the canvas tag.

## Rules of the game

- shoot with the space bar and move with the arrows.
- The game has 2 levels.
   * 1: You just need to shoot to the balls.
   * 2: You have to destroy the boss an avoid thee little cubes that go 
     to you.
- To win you have to accumulate 200 points in the boss level.

## Preview
If you want to play this game you can check this link [Game](https://rogeliosamuel621.github.io/Naves-Game/Index.html)

## How it works
Here I am going to explain to you how some functions work in my code. Functions that I suppose you can not find on the internet.

- Stars background

At the start of the game we create one object for each star, also we generate random numbers in position X. To create the illusion that they are not the same stars, that random numbers are generated when a star surpasses the gameboard ``` if(X > canvas.height) {object.status = 0} ```.

- How to print infinities bullets

Each bullet is an object which is created every time you press the space bar ``` line 92 to 99 ``` and stored in an array To print every bullet there is a function in the code ``` "shooting" line 166 to 201``` we have a loop that runs through whole the array and checks if the status is 1, that means that is printed.
