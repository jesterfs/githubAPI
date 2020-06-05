'use strict';

function getRepos() {
  
  let userName = $("#js-user").val();
  
  fetch(`https://api.github.com/users/` + userName + `/repos` 
)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
  // console.log(address);
}



function displayResults(results) {
  // console.log(responseJson.message);
  
  //replace the existing image with the new one
  for (let i = 0; i < results.length; i++){
    // $('.results').empty();
    $('#results-list').append(
    `<li><strong>Name:</strong> ${results[i].name}</li>
     <p><a href="${results[i].html_url}" target="_blank">Repo</a>
     </p> `
  );
  
  }

  //display the results section
  $('#results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $( "#results-list" ).empty();
    getRepos();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});