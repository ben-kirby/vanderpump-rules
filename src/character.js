
class Character {
  constructor(name) {
    this.name = name;
    if (name === "Stassi") {
      this.tolerance = 6;
      this.drinksConsumed = 1;
      this.credibility = 7;
      this.specialAbility = 0;
      this.enemies = ["James", "Jax"]
    }
    if (name === "Lala") {
      this.tolerance = 4;
      this.drinksConsumed = 1;
      this.credibility = 5;
      this.specialAbility = 0;
      this.enemies = ["James", "Jax"]
    }
    if (name === "Jax") {
      this.tolerance = 9;
      this.drinksConsumed = 1;
      this.credibility = 2;
      this.specialAbility = 0;
      this.enemies = ["James", "Lala"]
    }
    if (name === "Brittany") {
      this.tolerance = 5;
      this.drinksConsumed = 1;
      this.credibility = 8;
      this.specialAbility = 0;
      this.enemies = ["James", "Stassi"]
    }
    if (name === "James") {
      this.tolerance = 2;
      this.drinksConsumed = 1;
      this.credibility = 2;
      this.specialAbility = 0;
      this.enemies = ["Brittany", "Stassi"]
    }
  }
}
export { Character };
