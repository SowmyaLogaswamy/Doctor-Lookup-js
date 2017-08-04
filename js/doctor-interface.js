var Doctor = require('./../js/doctor.js');

var passedDoctorFunction = function(searchResults) {
  for(var i =0; i<searchResults.data.length; i++){
    $('.results').append('<div class="doctorResults">' + searchResults.data[i].practices[i].name + " " +
    searchResults.data[i].practices[i].visit_address.city + '>' + '<li>' +
    searchResults.data[i].practices[i].phones.number + '</li>'+ '</div>');
  }
};

$(document).ready(function(){
  $('.doctor').submit(function(event){
    $('.results').empty();
    event.preventDefault();
    var doctor = new Doctor();
    doctor.getDoctors(searchResults);
  });
});
