console.log("chrome extension content.js is ready")
console.log(window.location.toString())

document.getElementsByName("urls[LinkedIn]").value = "Cyrus Goh";

// if (window.location.toString().includes("lever")) {
//   document.getElementById('first_name').value = 'Cyrus';
//   document.getElementById('last_name').value = 'Goh';
//   document.getElementById('email').value = 'lgoh@ucdavis.edu';
//   document.getElementById('phone').value = '6509655034';
//   document.getElementById('job_application_answers_attributes_0_text_value').value = 'https://www.linkedin.com/in/cyrusgoh/';
//   document.getElementById('job_application_answers_attributes_1_text_value').value = 'https://www.lovincyrus.com';
// } else {
//   document.getElementsByName("name").value = "Cyrus Goh";
// }