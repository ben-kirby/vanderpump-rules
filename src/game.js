import { Character } from './character'
import { Enemy } from './enemy'

class Game {
  constructor(name){
    this.level = 1;
    this.character = new Character(name);
    this.enemy1 = new Enemy(this.character.enemies[0]);
    this.enemy2 = new Enemy(this.character.enemies[1]);
    this.rumor = new Rumor();
    this.crowd = new Crowd();
  }



  rumorMill(){
      if (this.enemy1.rumorDifficulty >= this.rumor.strength) {

      }
  }


  talkToCrowd(attendee){
    //talk to them
    this.rumor.strength += this.crowd.;

    pop(this.crowd.attendees.indexOf(attendee));
  }



}


export { Game };

class Rumor {
  constructor(){
    this.strength = 0;
    this.rumor = "";

  }
}

class Crowd {
  constructor(){
    const tom = {}

    this.attendees = [tom, othertom, ]





    this.attendees = [
      {
        name: "Tom Sandoval",
        socialInfluence: 6,
        drinkInfluence: 9
      },

      {
        name: "Tom Schwartz",
        socialInfluence: 4,
        drinkInfluence: 5
      },

      {
        name: "Ariana",
        socialInfluence: 7,
        drinkInfluence: 3
      },

      {
        name: "Scheena",
        socialInfluence: 1,
        drinkInfluence: 1
      },

      {
        name: "Katie",
        socialInfluence: 6,
        drinkInfluence: 3
      },

      {
        name: "Raquel",
        socialInfluence: 1,
        drinkInfluence: 1
      },

      {
        name: "Kristen",
        socialInfluence: 3,
        drinkInfluence: 4
      }
    ];
  }


}
