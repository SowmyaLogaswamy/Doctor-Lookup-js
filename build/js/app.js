(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey= "712a30bbee9f8a9910372ef25a1df649";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function (passedDoctorFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=1&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(apiResponse) {
      console.log(apiResponse);
    passedDoctorFunction(apiResponse.data.practices.name,apiResponse.data.practices.visit_addressname.city, apiResponse.data.practices.phones.number);
  })
  // .fail(function(error){
  //   console.log("fail");
  // });
};

module.exports = Doctor;

var apiKey = require('./../.env').apiKey;

//make an API request and display results
Doctor = function(){
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
