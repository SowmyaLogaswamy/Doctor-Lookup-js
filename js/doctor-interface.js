var Doctor = require('./../js/doctor.js');

var passedDoctorFunction = function(apiResponse) {
  for(var i=0; i<=apiResponse.data.length; i++ ) {
      $('#results').append("<li>" + apiResponse.data[i].profile.first_name + " " + apiResponse.data[i].profile.last_name + "</li>");
    }
};

$(document).ready(function(){
  $('.doctor').submit(function(event){
    $('#results').empty();
    event.preventDefault();
    var doctor = new Doctor();
    doctor.getDoctors($('#symptom').val(), passedDoctorFunction);
  });
});
