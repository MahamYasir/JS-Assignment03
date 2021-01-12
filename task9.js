var array = [24, 53, 78, 91, 12];
var largestNum= 0;
document.write("Array element: "+array);
for (var i=0; i <= largestNum; i++)
{
    if (array[i]>largestNum) 
    {
        var largestNum=array[i];
    }
}
document.write("<br>The largest Number is "+largestNum);