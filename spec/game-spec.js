import { Game } from './../src/game';

describe('Game', function(){

  let game;

  beforeEach(function(){
    game = new Game("Stassi");
  });

  it('should start a game with a level and character', function(){
    expect(game.character.name).toEqual("Stassi");
  });

  it('should have correct character attributes', function(){
    expect(game.character.tolerance).toEqual(60);
  });

  it('should have correct enemy attributes for a character attributes', function(){
    expect(game.enemy1.name).toEqual("James");
    expect(game.enemy2.name).toEqual("Jax");
  });

  it('should increase the characters number of drinks consumed', function(){
    game.character.hasDrink();
    expect(game.character.drinksConsumed).toEqual(2);
  });

  it('should allow the character to start a rumor', function(){
    game.createRumor("Jax is cheating on Brittany");
    expect(game.rumor.rumor).toEqual("Jax is cheating on Brittany");
  });

  it('should allow the character to talk to an attendee and it increasese the characters drinks consumed, and inscreases rumor strength', function(){
    game.createRumor("Jax is cheating on Brittany");
    game.talkToCrowd("Tom Sandoval");
    expect(game.rumor.strength).toEqual(6);
    expect(game.character.drinksConsumed).toEqual(10);
  });

  it('should allow the character to talk to an attendee and removes that attendee from the list of people to talk to', function(){
    game.createRumor("Jax is cheating on Brittany");
    game.talkToCrowd("Tom Sandoval");
    expect(game.crowd.crowdList.length).toEqual(6);
  });
});
