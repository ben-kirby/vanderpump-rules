import { Game } from './game'
import $ from 'jquery';

$(document).ready(function(){
  $(".game-form").submit(function(event){
    event.preventDefault();
    debugger;
    let character = $("#characters").val();
    let game = new Game(character);
    $("#character-name").html();
  });

});
