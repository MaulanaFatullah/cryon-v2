const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');

let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let month = today.getMonth();
let yyyy = today.getFullYear();

today = monthNames[month] + ' ' + dd;
document.getElementById('dateNow').innerText = "It's " + today;