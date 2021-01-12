var colours = ["Red ", "Green ", "Blue ", "Brown "];
document.write("<h4>Elements of Array</h4><br>"+colours+"<br>");

//asking user to input colour to add at beginning;
var input = prompt("What color you want to add to the beginning?");
colours.unshift(input);
document.write("<h4>Updated Array's Elements</h4><br>"+colours+"<br>");

//asking user to input colour to add at the end;
var input2 = prompt("What color you want to add to the end?")
colours.push(input2);
document.write("<h4>Updated Array's Elements</h4><br>"+colours+"<br>");

//adding two more colours to array;
colours.unshift("Purple ");
colours.unshift("Black ");
document.write("<h4>Updated Array's Elements</h4><br>"+colours+"<br>");

//deleting first element of array;
colours.shift();
document.write("<h4>Updated Array's Elements</h4><br>"+colours+"<br>");

//deleting last element of array;
colours.pop();
document.write("<h4>Updated Array's Elements</h4><br>"+colours+"<br>");

//asking user at which index he/she wants to add a color & color name;
var input3 = prompt("What color you want to add?")
var input4 = prompt("At which index you want to add this colour?")
colours.splice(input4,0,input3);
document.write("<h4>Updated Array's Elements</h4><br>"+colours+"<br>");

//asking the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete;
var input5 = prompt("At which index you want to delete color(s)?")
var input6 = prompt("How many colors you want to delete?")
colours.splice(input5,input6);
document.write("<h4>Updated Array's Elements</h4><br>"+colours+"<br>");