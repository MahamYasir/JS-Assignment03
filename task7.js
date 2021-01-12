var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]
document.write("var a = ["+a+"]");
document.write("<br>var b = ["+b+"]");
//merging variables a and b;
var ab = a.concat(b);
//removing duplicate numbers from the merged array;
for(var i = 0; i < ab.length; i++)
{
    for(var j = i+1; j < ab.length; j++) 
    {

        if(ab[i]===ab[j])
        {
          ab.splice(j,1);
        }
    }
}
//arranging elements of array in ascending order;
ab.sort((a,b)=>a-b);
document.write("<br>Output= ["+ab+"]")