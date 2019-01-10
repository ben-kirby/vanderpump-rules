class Enemy {
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

export { Enemy };  
