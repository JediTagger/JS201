define(["jquery"], function($) {
  
  return function() {
    var newMem = {
    "name": $('#name').val(),
    "age": $('#age').val(),
    "gender": $("input[type='radio'][name='sex']:checked").val(),
    "skills": $('#skills').val()//Eric! how do I turn a comma delimited string into an array of strings?!
    };
    console.log(newMem);
    $.ajax({
      url: "https://turner-family.firebaseio.com/.json",
      method: "POST",
      data: JSON.stringify(newMem)
    }).done(function() {
    });
  };//end return function 
});//end add family member module