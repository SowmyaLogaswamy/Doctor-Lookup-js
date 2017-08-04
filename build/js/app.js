(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey= "712a30bbee9f8a9910372ef25a1df649";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
