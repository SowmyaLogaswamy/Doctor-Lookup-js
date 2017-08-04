var apiKey = require('./../.env').apiKey;

function Search(){
}

Search.prototype.getDoctors = function (medicalIssue, displayDoctors) {
  this.medicalIssue = medicalIssue;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    this.searchResults=result
    displayDoctors(result);
  })
  .fail(function(error){
    console.log("fail");
  });
};

exports.doctorSearch = Search;
