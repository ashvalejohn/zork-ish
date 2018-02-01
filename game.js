class Game {
  constructor(){
  }

  run(){
    console.log(" ");
    console.log("\x1b[35m", "✨ WELCOME TO ZORKish! ✨");
    console.log(" ");
    console.log("\x1b[35m", "  Move in cardinal directions (i.e. 'east') and interact with the things you encounter.");
    console.log(" ");
    console.log("\x1b[32m", "You are in an open field on the west side of a white house with a boarded front door.");
  }
}

let g = new Game();

g.run();