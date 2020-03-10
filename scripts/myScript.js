//function to get first and last name
console.log('waiting for user name'); //printed to console

function hello() {
    var fname = document.getElementById('first_name').value;
    var lname = document.getElementById('last_name').value;
    var html = '<b>Hello ' + fname + ' ' + lname + "</b>";
    console.log("user submitted name: " + fname + " " + lname); //printed to console
    console.log("outputing users name on page");
    document.getElementById('result').innerHTML = html;
    

    //calculates days left until christmas
    console.log("calculating how many days left until christmas");
    today = new Date();
    xmas = new Date(today.getFullYear(), 11, 25);
    msPerDay = 24 * 60 * 60 * 1000 ;
    timeLeft = (xmas.getTime() - today.getTime());
    exactDaysLeft = timeLeft / msPerDay;
    console.log("outputing message for number of days left until xmas");
    daysLeft = "Fun fact: " + Math.ceil(exactDaysLeft) + " days left until christmas.";
    document.getElementById('xmas').innerHTML = daysLeft;

    //calculates how many letters in the full name
    console.log("adding the number of letters in their name as a string");
    var letterCount = 0;
    var position = 0;
    var fullName = String(fname) + String(lname);
    for(position = 0; position < fullName.length; position++){
        letterCount += 1;
    }
    console.log("outputing total amount of letters to page");
    document.getElementById('letterAmount').innerHTML = letterCount + " letters in your name.";

    //random name generator
    //name lists
    var firstPart = ["Ron", "Tom", "Dwight", "Lloyd"];
    var secondPart = ["Burgundy", "Brady", "Schrute", "Christmas"];
    var name = firstPart[Math.floor(Math.random() * firstPart.length)] + " " + secondPart[Math.floor(Math.random() * secondPart.length)];
    console.log("giving the user a new name by doing quick maths");
    document.getElementById('randomName').innerHTML = "Here is your new name... " + name;

    //sum of characters in fname and lname based on position in alphabet
    //Ran out of time last night and got too tired thinking about this part!
}
document.getElementById('outputName').addEventListener('click', hello);
