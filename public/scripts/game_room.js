class Games {
  constructor() {
    this.toysInChestCounter = 0;
    this.amountToysInGameRoom = 3;
    this.pointRuler = 0;
    this.roomToys = ["ball", "bear", "dinotoy", "drum", "duck", "plane", "robot", "slipper"];
    this.roomSortedElements = [];
  }
  startGameRoom() {
    this.setGameRoomAmountToys();
  }
  getToys() {
    return this.roomToys
  }
  setToysInChest() {
    this.toysInChestCounter++
  }
  getToysInChest() {
    return this.toysInChestCounter
  }
  clearToysInChest() {
    this.toysInChestCounter = 0;
  }
  setPointRuler() {
    this.pointRuler++
  }
  getPointRuler() {
    return this.pointRuler;
  }
  setGameRoomAmountToys() {
    switch (this.pointRuler) {
      case 3:
        this.amountToysInGameRoom = 5;
        $("#bookcase-field1").show();
        break;
      case 8:
        this.amountToysInGameRoom = 6;
        $("#bookcase-field2").show();
        break;
      case 14:
        this.amountToysInGameRoom = 7;
        $("#bookcase-field3").show();
        break;
    }
  }
  getGameRoomAmountToys() {
    return this.amountToysInGameRoom
  }
  raffle(_arr) {
    let sortedArr = _arr.sort(() => 0.3 - Math.random());
    return sortedArr
  }
  finishRoomGame() {
    this.clearToysInChest();
  }
  marker() {
    if (this.pointRuler == 3 || this.pointRuler == 8 || this.pointRuler == 14) {
      sound.playFX("game_unlocked");
      showNewGame(this.pointRuler);
    } else if (this.pointRuler == 21) {
      sound.playFX("victory");
      $("#bookcase-field4").show();
    }
  }
}