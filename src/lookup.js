function toPaddedString(int) {
  if (int < 10) return "0" + int;
  else return int.toString();
}

export function lookup({firstName, lastName, specialty}) {
  const date = Date.now();
  const formattedDate = date.getFullYear()}+"-"+toPaddedString(date.getMonth())+"-"+toPaddedString(date.getDate())

  let request = new XMLHttpRequest();

  let url = "https://api.betterdoctor.com/&{formattedDate}/doctors?"
  if (firstName) url += "first_name=${firstName}&"
  if (lastName) url += "last_name=${lastName}&"
  if (specialty) url += "specialty_uid=${specialty}&"
  url += "location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=100&user_key=9a04c97b866b15e5f0e8a24fa4252742"

  $.get(url).then(function)
}
