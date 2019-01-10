import { Game } from './../src/game';

describe('Game', function(){

  it('should start a game with a level and character', function(){
    let game = new Game("Stassi");
    expect(game.character.name).toEqual("Stassi");
  });

  it('should have correct character attributes', function(){
    let game = new Game("Stassi");
    expect(game.character.tolerance).toEqual(6);
  });

  it('should have correct enemy attributes for a character attributes', function(){
    let game = new Game("Stassi");
    expect(game.enemy1.name).toEqual("James");
    expect(game.enemy2.name).toEqual("Jax");
  });

  it('should increase the characters number of drinks consumed', function(){
    let game = new Game("Stassi");
    game.character.hasDrink();
    expect(game.character.drinksConsumed).toEqual(2);
  });

  it('should increase the characters number of drinks consumed', function(){
    let game = new Game("Stassi");
    game.rumor();
    expect(enemy).toEqual(this.enemy1);
  });
  
  it('should increase the characters number of drinks consumed', function(){
    let game = new Game("Stassi");
    game.rumor();
    expect(enemy).toEqual(this.enemy1);
  });



});
