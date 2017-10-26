// Initialize Firebase
var config = {
	apiKey: "AIzaSyAMLuaHHk9B6-ge7Z2rjhR8Oqk87uirgd4",
    authDomain: "trainproject-fbbcf.firebaseapp.com",
    databaseURL: "https://trainproject-fbbcf.firebaseio.com",
    projectId: "trainproject-fbbcf",
    storageBucket: "trainproject-fbbcf.appspot.com",
    messagingSenderId: "147999627864"
};

firebase.initializeApp(config);

// Create a variable to reference the database
    var database = firebase.database();

// Initial Values
	var trainName = "";
    var Destination = "";
    var FirstTrain = "";
    var Frequency = "";


//Grabs user input
$("#add-user").on("click", function(){
 	event.preventDefault();
 	var trainName = $("#trainName-input").val().trim();
 	var Destination = $("#Destination-input").val().trim();
	var FirstTrain = $("#FirstTrain-input").val().trim();
	var Frequency = $("#Frequency-input").val().trim();

	database.ref().set({
		trainName: trainName,
    	Destination: Destination,
    	FirstTrain: FirstTrain,
    	Frequency: Frequency
	});

	// Clears all of the text-boxes
  $("#trainName-input").val("");
  $("#Destination-input").val("");
  $("#FirstTrain-input").val("");
  $("#Frequency-input").val("");

   // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + Destination + "</td><td>" +
  FirstTrain + "</td><td>" + Frequency "</tr>");

});

    // Firebase watcher + initial loader HINT: .on("value")
    //database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      //console.log(snapshot.val());




// Creates local "temporary" object for holding data
//var newTrain = {
//	trainName: trainName,
  //  Destination: Destination,
    //FirstTrain: FirstTrain,
   // Frequency: Frequency
 // };

// Uploads data to the database
	//database.ref().push(newTrain)

// Logs everything to console
  //console.log(newTrain.trainName);
  //console.log(newTrain.Destination);
  //console.log(newTrain.FirstTrain);
  //console.log(newTrain.Frequency);

// Clears all of the text-boxes
  //$("#TrainName-input").val("");
  //$("#destination-input").val("");
  //$("#FirstTrain-input").val("");
  //$("#Frequency-input").val("");

//});


//database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  //console.log(childSnapshot.val());

  // Store everything into a variable.
  //var trainName = childSnapshot.val().name;
  //var Destination = childSnapshot.val().destination;
  //var FirstTrain = childSnapshot.val().firstTrain;
  //var Frequency = childSnapshot.val().frequency;

  // Employee Info
  //console.log(trainName);
  //console.log(Destination);
  //console.log(FirstTrain);
  //console.log(Frequency);

  // Prettify the employee start
  //var trainFirstPretty = moment.unix(FirstTrain).format("HH:mm");

  // Calculate the months worked using hardcore math
  // To calculate the minutes of train
  //var trainFrequency = moment().diff(moment.unix(FirstTrain, "X"), "minutes");
  //console.log(trainFrequency);

  // Calculate the difference between firstTrainPretty and now using frequency
  //var trainLanding = trainFirstPretty - trainFrequency;
  //console.log(trainLanding);

  // Add each train's data into the table
  //$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + Destination + "</td><td>" +
  //trainFirstPretty + "</td><td>" + trainFrequency + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
//});

