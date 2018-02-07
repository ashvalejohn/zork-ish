const items = require("./items.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor(){
  }

  run(){
    console.log(" ");
    console.log("\x1b[35m", "✨ WELCOME TO ZORKish! ✨");
    console.log(" ");
    console.log("\x1b[35m", "  Move in cardinal directions (i.e. 'east') and interact with the things you encounter.");
    console.log(" ");
    rl.question('You are in a hallway. There is a door at the end of the hallway.', (answer) => {
      this.switchboard(answer);
      rl.close();
    });
  }

  switchboard(command){
    switch (command) {
      case 'door':
        let door = new items.Door();
        door.openDoor();
      default:
        console.log("Not a command, babe.");
    }
  }
}

let g = new Game();

g.run();