import { Character } from './character'
import { Enemy } from './enemy'

class Game {
  constructor(name){
    this.level = 1;
    this.character = new Character(name);
    this.enemy1 = new Enemy(this.character.enemies[0]);
    this.enemy2 = new Enemy(this.character.enemies[1]);
    this.rumor;
    this.crowd = new Crowd();
  }

  createRumor(rumor){
    this.rumor = new Rumor(rumor)
  }

  talkToCrowd(attendee){
    const personTalkedTo = this.findAttendee(attendee);
    this.rumor.strength += personTalkedTo.socialInfluence;
    this.character.drinksConsumed += personTalkedTo.drinkInfluence;
    debugger;
    this.alterCrowd(personTalkedTo);
  };

  findAttendee(attendee){
    for (var i = 0; i < this.crowd.attendees.length; i++) {
      if (this.crowd.attendees[i]["name"] === attendee){
        return this.crowd.attendees[i];
      }
    }
  }

  alterCrowd(personTalkedTo){
    let index = this.crowd.crowdList.indexOf(personTalkedTo["name"]);
    if (index > -1){
      this.crowd.crowdList.splice(index, 1)
    }
    console.log(this.crowd.crowdList);
  }
}



class Rumor {
  constructor(rumor){
    this.strength = 0;
    this.rumor = rumor;

  }
}

class Crowd {
  constructor(){
    this.crowdList = ["Tom Sandoval", "Tom Schwartz", "Ariana", "Scheena", "Katie", "Raquel", "Kristen"];
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



export { Game };
