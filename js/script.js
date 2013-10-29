$(document).ready(function() {

   //Get random quote
    var prompts = new Array(

      "An elephant in the apocalypse", 
      "A tiny pig in a tiny raincoat",
      "A cooler full of organs",
      "That thing that electrocutes your abs",
      "Muhammad (Praise Be Unto Him)",
      "A cooler full of organs",
      "An icepick lobotomy",
      "Toni Morrison's vagina",
      "flying sex snakes",
      "elderly Japanese men",
      "vigorous jazz hands",
      "a really cool hat",
      "laying an egg"),

    randomNumber = prompts[Math.floor( Math.random() * prompts.length )];
    $('#promptbox').text( randomNumber );

    //TIMER
  $(function(){

      //Hide the 'time's up' notification 
      $('.done').hide();
      
      // Setting for the timer 
      $('#timer').pietimer({
         seconds: 90,
         color: 'rgba(52, 209, 157, 0.8)',
         height: 100,
         width: 100
      },

      //Show the 'time's up notification
      function(){
         $('.done').show('slow');
      });
      
   $(function(){
      $('.done').hide();
      $('#timer').pietimer('start');
      return false;
   });      
   });
});