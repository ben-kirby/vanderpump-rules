
class Character {
  constructor(name) {
    this.name = name;
    if (name === "Stassi") {
      this.tolerance = 60;
      this.drinksConsumed = 1;
      this.credibility = 7;
      this.specialAbility = 0;
      this.enemies = ["James", "Jax"]
    }
    if (name === "Lala") {
      this.tolerance = 40;
      this.drinksConsumed = 1;
      this.credibility = 5;
      this.specialAbility = 0;
      this.enemies = ["James", "Jax"]
    }
    if (name === "Jax") {
      this.tolerance = 90;
      this.drinksConsumed = 1;
      this.credibility = 2;
      this.specialAbility = 0;
      this.enemies = ["James", "Lala"]
    }
    if (name === "Brittany") {
      this.tolerance = 50;
      this.drinksConsumed = 1;
      this.credibility = 8;
      this.specialAbility = 0;
      this.enemies = ["James", "Stassi"]
    }
    if (name === "James") {
      this.tolerance = 20;
      this.drinksConsumed = 1;
      this.credibility = 2;
      this.specialAbility = 0;
      this.enemies = ["Brittany", "Stassi"]
    }
  }

  hasDrink(){
    this.drinksConsumed ++;
  }
}
export { Character };
