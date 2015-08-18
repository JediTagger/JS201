requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
  },
  shim: {
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "firebase", "hbs", "add-family-member", "delele-family-member"],
  // run these dependencies first, then run the below code
  function($, fb, Handlebars, addfam, delfam) {
    //this assigns the arguments to the above dependencies
    var myFirebaseRef = new Firebase("https://turner-family.firebaseio.com//");
    myFirebaseRef.on("value", function(snapshot) {
      
    });//end firebase
  }//end main function
);//end requirejs