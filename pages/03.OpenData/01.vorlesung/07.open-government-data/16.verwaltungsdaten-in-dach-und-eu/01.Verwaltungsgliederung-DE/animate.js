
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

var id_vwgeb = "vwgeb_de";
var id_vwgl = "vwgl_de";
var vwgeb_path = "adm_de/vwgeb_de/Rplot";
var vwgl_path = "adm_de/vwgl_de/ags";

//preload images
var images_vwgeb = new Array();
var images_vwgl = new Array();

function preloadImages (){
  for (i = 0; i < 6; i++) {
    images_vwgeb[i] = new Image();
    images_vwgeb[i].src = vwgeb_path+(i+1)+".png";
    images_vwgl[i] = new Image();
    images_vwgl[i].src = vwgl_path+(i+1)+".png";
  }
}
preloadImages();

var id = setInterval(frame, 3000);
var pos = 0;

// 4 states: 0 = ready; 1 = started loading images; 2/3 = first/second image loaded
var imageLoaded = 0;
  //console.log("pos: " + pos +"imageLoaded: "+imageLoaded);

  //alert("test");
function imageOnload(){
  console.log("pos: " + pos +" imageLoaded: "+imageLoaded+" loaded image "+(imageLoaded));
  imageLoaded++;

  if(imageLoaded == 3){
    loadDescription();
    imageLoaded = 0;
  }
};

function frame() {
    console.log("pos: " + pos +" imageLoaded: "+imageLoaded);
    if(imageLoaded != 0) // skip iteration if images from previous were not loaded
      return;
    imageLoaded = 1;
    console.log("pos: " + pos +" imageLoaded: "+imageLoaded);
    var img1 = document.getElementById(id_vwgeb);
    img1.onload = imageOnload;
    img1.src=vwgeb_path+(pos+1)+".png";
    var img2 = document.getElementById(id_vwgl);
    img2.onload = imageOnload;
    img2.src=vwgl_path+(pos)+".png";



}


function loadDescription(){
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
  var e1 = document.getElementById("description");
  if(5-pos==5)
      e1.innerHTML = "<b>"+adetext[5 - pos ]+"</b>";
  else
   e1.innerHTML = "<b>"+adetext[5 - pos ]+"</b> - "+captiontext[5 - pos ];
   console.log("loaded description "+(5-pos)+": "+adetext[5 - pos ]);

   if(pos >= 5)
       pos=0;
   else
       pos++;
}
