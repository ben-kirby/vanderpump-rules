import { Character } from './character'

class Game {
  constructor(name){
    this.level = 1;
    this.character = new Character(name);
    this.enemy1 = new Enemies(this.character.enemies[0])
    this.enemy2 = new Enemies(this.character.enemies[1])

  }
}

  // battle(player){
  //   const enemies = player.enemies
  // }





// class Battle {
//   constructor() {
//
//   }
// }

export { Game };



class Enemies {
  constructor(enemyName) {
    if (enemyName === "James") {
      this.name = "James";
      this.rumorDifficulty = 1;
    }
    if (enemyName === "Jax") {
      this.name = "Jax";
      this.rumorDifficulty = 3;
    }
    if (enemyName === "Lala") {
      this.name = "Lala";
      this.rumorDifficulty = 5;
    }
    if (enemyName === "Brittany") {
      this.name = "Brittany";
      this.rumorDifficulty = 7;
    }
    if (enemyName === "Stassi") {
      this.name = "Stassi";
      this.rumorDifficulty = 9;
    }
  }
}
