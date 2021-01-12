document.write("a. Counting: ");
for (var i = 1 ; i <= 15; i++)
{
    document.write(i+", ");
}

document.write("<br>b. Reverse Counting: ");
for (var i = 10 ; i >=1 ; i--)
{
    document.write(i+", " )
}

document.write("<br>c. Even: ");
for (var i = 0;i <= 20; i++)
{
    if(i % 2 === 0){
        document.write(i+", ");
    }
}

document.write("<br>d. Odd: ");
for (var i = 0;i <= 20; i++)
{
    if(i % 2 !== 0){
        document.write(i+", ");
    }
}

document.write("<br>e. Series: ");
for (var i = 2;i <= 20; i++)
{
    if(i % 2 === 0){
        document.write(i+"k, ");
    }
}