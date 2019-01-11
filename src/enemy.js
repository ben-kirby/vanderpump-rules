class Enemy {
  constructor(enemyName) {
    if (enemyName === "James") {
      this.name = "James";
      this.rumorDifficulty = 10;
    }
    if (enemyName === "Jax") {
      this.name = "Jax";
      this.rumorDifficulty = 30;
    }
    if (enemyName === "Lala") {
      this.name = "Lala";
      this.rumorDifficulty = 50;
    }
    if (enemyName === "Brittany") {
      this.name = "Brittany";
      this.rumorDifficulty = 70;
    }
    if (enemyName === "Stassi") {
      this.name = "Stassi";
      this.rumorDifficulty = 90;
    }
  }
}

export { Enemy };
