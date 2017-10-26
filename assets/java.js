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

//Grabs user input
 $("#Submit").on("click", function(event){
 	event.preventDefault();
 	var trainName = $("#trainName").val().trim();
 	var Destination = $("#Destination").val().trim();
	var FirstTrain = moment($("#FirstTrain").val().trim(), "HH.mm").format("X");
	var Frequency = moment($("#Frequency").val().trim(), "mm").format("Y");
	console.log(FirstTrain["0"].value)
	console.log(Frequency["0"].value)

// Creates local "temporary" object for holding data
var newTrain = {
	name: trainName,
    destination: Destination,
    firstTrain: FirstTrain,
    frequency: Frequency
  };

// Uploads data to the database
	database.ref().push(newTrain)

// Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

// Clears all of the text-boxes
  $("#TrainName-input").val("");
  $("#destination-input").val("");
  $("#FirstTrain-input").val("");
  $("#Frequency-input").val("");

});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var Destination = childSnapshot.val().destination;
  var FirstTrain = childSnapshot.val().firstTrain;
  var Frequency = childSnapshot.val().frequency;

  // Employee Info
  console.log(trainName);
  console.log(Destination);
  console.log(FirstTrain);
  console.log(Frequency);

  // Prettify the employee start
  var trainFirstPretty = moment.unix(FirstTrain).format("HH:mm");

  // Calculate the months worked using hardcore math
  // To calculate the minutes of train
  var trainFrequency = moment().diff(moment.unix(FirstTrain, "X"), "minutes");
  console.log(trainFrequency);

  // Calculate the difference between firstTrainPretty and now using frequency
  var trainLanding = trainFirstPretty - trainFrequency;
  console.log(trainLanding);

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + Destination + "</td><td>" +
  trainFirstPretty + "</td><td>" + trainFrequency + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
});


