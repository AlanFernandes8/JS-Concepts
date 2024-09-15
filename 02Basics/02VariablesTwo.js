const uid = "abc1";

var FirstName = "Alan";
var LastName = "Fernandes";
var country = "India";
var state = "Maharashtra";
var city = "Mumbai";
var email = "alanferns19@gmail.com";
var password = "1234";
var confirmpassword = "1234";
var coursCount = 0;
var isLoggedInFromGoogle = false;

// FirstName = prompt("Enter your name");

console.log(email);
console.log(uid);

console.log(`
   With unique ID: ${uid}
   User is: ${FirstName} ${LastName}
   and email: ${email}
   Country is: ${country}
   is from: ${city}, ${state}
   and has: ${coursCount} courses
   and logged in from google: ${isLoggedInFromGoogle}
`);