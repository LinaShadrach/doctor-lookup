import './styles.css';
import { lookup } from './lookup';

$(document).ready(function() {
  $('#lookup-form').submit(function(event) {
    event.preventDefault();

    $("#response").text("");
    $('#doctors').empty();

    lookup({
      firstName: $('#first-name').val(),
      lastName: $('#last-name').val(),
      specialty: $('#specialty').val()
    });
  });
});
