var pakQualifications = ["","SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
    document.write("<h2>Qualifications:</h2><br>");
for (var i = 1; i < pakQualifications.length; i++)
{
    document.write(i+") "+pakQualifications[i]+"<br />");
}