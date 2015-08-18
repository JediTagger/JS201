define(["jquery"], function($) {
  
  return function() {

    $.ajax({
      url: "https://turner-family.firebaseio.com/.json",
      method: "DELETE",
      // data: JSON.stringify(newSong)  needed????
    }).done(function() {

    });
  };//end return function 
});//end delete family member module