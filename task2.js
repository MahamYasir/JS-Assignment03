var students = ["Michael","John","Tony"];
var scores = [320,230,480];
var totalMarks = 500;
for (var i = 0 ; i < students.length; i++)
{
    for (var j = 0; j < scores.length; j++)
    {
        var percentage = scores[i]/totalMarks*100;
}
document.write("Score of "+students[i]+" is "+scores[i]+". Percentage: "+percentage+"%<br>");
}