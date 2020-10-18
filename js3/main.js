// Ask the user to enter their tel and check its valid
var tel = prompt("PLease enter you phone number with dashes, it wont be used for spam!: ", "123-456-7890");
alert(tel.charAt(3) === "-" && tel.charAt(7) === "-" && tel.length === 12);

// Ask for DOB and check its valid
var dob = prompt("Please enter your d.o.b in the format mm/dd/yy: ", "12/12/10");
alert(dob.charAt(2) === "/" && dob.charAt(5) === "/" && dob.length === 8);

// Ask for postal code and check its valid
var pc = prompt("Please enter your post code: ");
alert(pc.length === 5 || pc.length === 10 && pc.charAt(5) === "-");

// Ask for state abbreviation and check its valid
var state = prompt("Please enter your state code: ");
alert(state.length === 2 && state === state.toUpperCase());

// Ask for marital status and allow yes or no any case
var married = prompt("Are you married? ");
alert(married.toLowerCase() === "yes" || married.toLowerCase() === "no");
