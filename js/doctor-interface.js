var Search = require('./../js/doctor.js').doctorSearch;

var displayDoctorInfo = function(searchResults) {
  for(var i =0; i<searchResults.data.length; i++){
    $('.results').append('<div class="doctorResults">'+ '<h2>' + searchResults.data[i].profile.first_name + " " + searchResults.data[i].profile.last_name + '</h2>' + '<img class="doctorImage" src=' + searchResults.data[i].profile.image_url + '>' + '<li>' + searchResults.data[i].profile.bio + '</li>'+ '</div>');
  }
};

$(document).ready(function(){
  $('.doctor').submit(function(event){
    $('.results').empty();
    event.preventDefault();
    var currentSearch = new Search();
    var symptom = $('#symptom').val();
    currentSearch.getDoctors(symptom, displayDoctorInfo);
  });
});
