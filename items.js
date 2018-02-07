class Door{
  constructor(){
    this.open = false;
  }

  openDoor(){
    this.open = true;
    console.log("You opened the door!");
  }

}

module.exports = {
  Door : Door,
}