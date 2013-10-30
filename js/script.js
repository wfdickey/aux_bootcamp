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
      "laying an egg",
      "kittens and balloons",
      "tasteful sideboob",
      "geese",
      "shiny objects",
      "chunks of dead prostitute",
      "concealing a boner",
      "authentic mexican cusine", 
      "A Bop-it",
      "The American Dream",
      "A tribe of warrior women",
      "A murder most foul",
      "Autocannibalism",
      "Chilren on leashes",
      "The Kool-Aid man",
      "A mating display"
      ),

    randomNumber = prompts[Math.floor( Math.random() * prompts.length )];
    $('#promptbox').text( randomNumber );

    //TIMER
  $(function(){

      //Hide the 'time's up' notification 
      $('.done').hide();
      
      // Setting for the timer 
      $('#timer').pietimer({
         seconds: 1,
         color: 'rgba(52, 209, 157, 0.8)',
         height: 100,
         width: 100
      },

      //Show the 'time's up notification
      function(){
        $('#timer').remove();
        $('#promptbox').remove();
         $('.done').show('slow');
      });
      
   $(function(){
      $('.done').hide();
      $('#timer').pietimer('start');
      return false;
   }); 
  });  
});

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('image').addEventListener('change', handleFileSelect, false);












