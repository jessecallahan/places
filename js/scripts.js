// Business Logic for places ---------
function places(){
    this.destinations = [],
    this.currentId = 0
}

places.prototype.addDestination = function(destination) {
    destination.id = this.assignId();
    this.destinations.push(destination);
  }

  places.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }

// Business Logic for Destination ---------
function Destination (locationName, landmarksName, toyDate, notesText) {
    this.locationName = locationName;
    this.landmarksName = landmarksName;
    this.toyDate = toyDate;
    this.notesText = notesText;
}


// User Interface Logic ---------
var places = new places ();

$(document).ready(function() {
    $("form#new-destination").submit(function(event) {
        event.preventDefault();
        var inputtedlocationName = $("input#new-locationName").val();
        var inputtedlandmarksName = $("input#new-landmarksName").val();
        var inputtedtoyDate = $("input#new-toyDate").val();
        var inputtednotesText = $("input#new-notesText").val();
        var newDestination = new Destination (inputtedlocationName, inputtedlandmarksName, inputtedtoyDate, inputtednotesText);
        places.addDestination(newDestination);
        
        //$("#title-destination").text(" ")
        //for(i = 0; i < places.destinations.length; i++){
             //$("#title-destination").append("<div id=" + i + ">" + places.destinations[i].locationName + "</div>");
        $("#title-destination").append(newDestination.locationName)
        $("#info-destination").append("<li>" + newDestination.landmarksName + "</li>");
       $("#info-destination").append("<li>" + newDestination.toyDate + "</li>");
       $("#info-destination").append("<li>" + newDestination.notesText + "</li>");
    $("#title-destination").click(function() {
           $("#info-destination").show();
        console.log ("hows it goin")
      });
    })
      console.log(places.destinations)
      //console.log(newDestination)
    })

