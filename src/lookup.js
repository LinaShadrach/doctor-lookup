function listDoctors(data) {
  data.forEach(function(doctor) {
    let firstName = doctor.profile.first_name;
    let lastName = doctor.profile.last_name;
    let address = doctor.practices[0].visit_address;
    let formattedAddress = address.street+", "+address.city+" "+address.state+", "+address.zip;
    let phone = doctor.practices[0].phones[0].number;
    let website = doctor.practices[0].website;
    let acceptingNew = doctor.practices[0].accepts_new_patients;

    let toAppend = "<li>"
    if (website) toAppend += "<h4><a href='"+website+"'>Dr. " +firstName+" "+lastName+"</a></h4>";
    else toAppend += "<h4>Dr. " +firstName+" "+lastName+"</h4>"
    toAppend += "<p>"+formattedAddress+"</p>";
    toAppend += "<p>"+phone+"</p>";
    if(acceptingNew) toAppend += "<p>Accepting new patients</p>";
    else toAppend += "<p>Not accepting new patients</p>";
    toAppend += "</li>";

    $('#doctors').append(toAppend);
  });
}

export function lookup({firstName, lastName, specialty}) {
  let url = "https://api.betterdoctor.com/2016-03-01/doctors?";
  if (firstName) url += "first_name=" + firstName + "&";
  if (lastName) url += "last_name=" + lastName + "&";
  if (specialty) url += "specialty_uid=" + specialty + "&";
  url += "location=45.523%2C-122.676%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=";
  url += process.env.exports.apiKey;

  $.get(url).then(function(response) {
    if (response.data.length == 0) {
      $("#response").text("No matches found");
    } else {
      listDoctors(response.data);
    }
  }).fail(function(error) {
    $("#response").text("Error: " + error.statusText);
  });
}
