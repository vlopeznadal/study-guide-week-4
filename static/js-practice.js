'use strict';

// Make an Event Handler

// Your Code Here

// Practice Your Times Tables

// Your Code Here

// Finding the Button

// Your Code Here

// An Agreeable Form

// Your Code Here

// Five colored primes

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

// Your Code Here

// Got Puppies?

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  //get the URL for the puppy photo out of the results object
  const puppyURL = results.url;

  //create a new img element and set its source to be the puppy URL
  const puppyPhoto = $('<img>').attr('src', puppyURL);

  //clear anything in the div and then add the img element
  $('#puppies-go-here').empty();
  $('#puppies-go-here').append(puppyPhoto);
}

// Your Code Here
