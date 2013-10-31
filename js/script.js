$(document).ready(function() {

   //Get random quote
    var prompts = new Array(

      "an elephant in the apocalypse", 
      "a tiny pig in a tiny raincoat",
      "a cooler full of organs",
      "that thing that electrocutes your abs",
      "a cooler full of organs",
      "an icepick lobotomy",
      "toni Morrison's vagina",
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
      "a Bop-it",
      "the American Dream",
      "a tribe of warrior women",
      "a murder most foul",
      "autocannibalism",
      "children on leashes",
      "the Kool-Aid man",
      "a mating display "
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
         color: 'rgba(149, 207, 183, 0.8)',
         height: 175,
         width: 175
      },

      //Show the 'time's up notification
      function(){
        $('#timer').remove();
        $('#promptbox').remove();
        $('#drawthis').remove();
         $('.done').show('slow');
      });
      
   $(function(){
      $('.done').hide();
      $('#timer').pietimer('start');
      return false;
   }); 

   var sec = 1
  var timer = setInterval(function() { 
   $('#hideMsg span').text(sec--);
   if (sec == -1) {
      $('#hideMsg').fadeOut('fast');
      clearInterval(timer);
   } 
}, 1000);

  });  
});


// Turn Image into dataURL so it can be stored in local storage 

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


    //Display "Go to journal"

    $(function(){
      $('#textalert').remove()
      $('input').show()
      $('#picture').remove();
      $('#cameraicon').remove();
      $('#list').show();
      $('#congrats').show();


      
    });

  }

  if($("body").hasClass("home")) {

  document.getElementById('image').addEventListener('change', handleFileSelect, false);

}



// Get a reference to the image element
var image = document.getElementById("list");
 
// Take action when the image has loaded
if ($("body").hasClass("home")) {

list.addEventListener("load", function () {
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");
 
    // Make sure canvas is as big as the picture
    imgCanvas.width = list.width;
    imgCanvas.height = list.height;
 
    // Draw image into canvas element
    imgContext.drawImage(list, 0, 0, list.width, list.height);
 
    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");
 
    // Save image into localStorage
    try {
        localStorage.setItem("list", imgAsDataURL);
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }

}, false);

}

// localStorage with image
var storageFiles = JSON.parse(localStorage.getItem("storageFiles")) || {},
    list = document.getElementById("list"),
    storageFilesDate = storageFiles.date,
    date = new Date(),
    todaysDate = (date.getMonth() + 1).toString() + date.getDate().toString();
 
// Compare date and create localStorage if it's not existing/too old   
if (typeof storageFilesDate === "undefined" || storageFilesDate < todaysDate) {
    // Take action when the image has loaded
    list.addEventListener("load", function () {
        var imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");
 
        // Make sure canvas is as big as the picture
        imgCanvas.width = list.width;
        imgCanvas.height = list.height;
 
        // Draw image into canvas element
        imgContext.drawImage(list, 0, 0, list.width, list.height);
 
        // Save image as a data URL
        storageFiles.list = imgCanvas.toDataURL("image/png");
 
        // Set date for localStorage
        storageFiles.date = todaysDate;
 
        // Save as JSON in localStorage
        try {
            localStorage.setItem("storageFiles", JSON.stringify(storageFiles));
        }
        catch (e) {
            console.log("Storage failed: " + e);
        }
    }, false);
 
    // Set initial image src    
    list.setAttribute("src", "list.png");
}
else {
    // Use image from localStorage
    list.setAttribute("src", storageFiles.list);
}


















