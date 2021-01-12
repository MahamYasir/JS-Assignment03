var num = [12,34,56,34,12,78];
document.write("Array with duplicate values: ["+num+"]");
for(var i = 0; i < num.length; i++)
{
    for(var j = i+1; j < num.length; j++) 
    {

        if(num[i]===num[j])
        {
          num.splice(j,1);
        }
    }
}
document.write("<br>Now the clean array is: ["+num+"]");