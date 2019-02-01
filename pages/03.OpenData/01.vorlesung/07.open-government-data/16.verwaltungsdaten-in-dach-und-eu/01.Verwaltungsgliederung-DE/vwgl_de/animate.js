var id = setInterval(frame, 3000);
var pos = 0;
captiontext = [
"11014 Gemeinden, davon 2 bewohnte gemeindefreie Gebiete (Stand 31.12.2018)",
"4511 Verwaltungsgemeinschaften, davon 1254 Gemeindeverbände (Stand 31.12.2018)",
"401 Kreise, davon 107 kreisfreie Städte (Stand 31.12.2018)",
"19 Regierungsbezirke (Stand 31.12.2018)",
"16 Bundesländer (Stand 31.12.2018)",""];

adetext = [
"ADE 6: Gemeinden",
"ADE 5: Verwaltungsgemeinschaften",
"ADE 4: Kreise",
"ADE 3: Regierungsbezirke",
"ADE 2: Länder",
"ADE 1: Staat"];

function frame() {
    var e1 = document.getElementById("description");
    if(5-pos==5)
        e1.innerHTML = "<b>"+adetext[5 - pos ]+"</b>";
    else
     e1.innerHTML = "<b>"+adetext[5 - pos ]+"</b> - "+captiontext[5 - pos ];
    var img1 = document.getElementById("vwgeb_de");
    img1.src="vwgeb_de/Rplot"+(pos+1)+".png";
    var img2 = document.getElementById("vwgl_de");
    img2.src="vwgl_de/ags"+(pos)+".png";
    var array = document.getElementsByClassName("division_"+pos);
    for (var index = 0; index < array.length; index++) {
        var textElement = array[index];
        textElement.style.color="blue";
    }
    array = document.getElementsByClassName("division_"+(pos+5) % 6);
    for (var index = 0; index < array.length; index++) {
        var textElement = array[index];
        textElement.style.color="inherit";
    }
    if(pos >= 5)
        pos=0;
    else
        pos++;
}
</script>
