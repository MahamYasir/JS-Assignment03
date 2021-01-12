var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to our Bakery. What do you want?");
var found = false;
for (var i = 0; i  < items.length; i++)
{
    if(items[i] === input)
    {
        alert(input+" is/are available on index "+i+" in our Bakery");
        found= true;
        break;
    }
}
if (!found){
    alert("We are sorry. "+input+" is/are not available in our Bakery");
} 