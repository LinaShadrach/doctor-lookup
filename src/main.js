// import './styles.css';
import { pingPong } from './ping-pong';
// import { lookup } from './lookup';

function listDoctors(doctors) {
  doctors.forEach(function(result) {
    $('#doctors').append("<li>" + element + "</li>");
  });
}

$(document).ready(function() {

  $('#lookup-form').submit(function(event) {
    event.preventDefault();
    const firstName = $('#first-name').val(),
    const lastName = $('#last-name').val(),
    const specialty = $('#specialty').val()

    const date = Date.now();
    const formattedDate = date.getFullYear()}+"-"+toPaddedString(date.getMonth())+"-"+toPaddedString(date.getDate())

    let request = new XMLHttpRequest();

    let url = "https://api.betterdoctor.com/&{formattedDate}/doctors?"
    if (firstName) url += "first_name=${firstName}&"
    if (lastName) url += "last_name=${lastName}&"
    if (specialty) url += "specialty_uid=${specialty}&"
    url += "location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=9a04c97b866b15e5f0e8a24fa4252742"
    
  });
});
