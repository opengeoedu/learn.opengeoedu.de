/******************************************************* *
**
** Function to load SVG safely using AJAX,
** including fallback to png files when
** SVG is not supported
**
** Pass the selector and the URL of the files
** without its extenstion as the function
** will take care of it.
**
** Based on http://css-tricks.com/ajaxing-svg-sprite/
**
* *******************************************************/

function loadSvg(selector, url, afterFun) {
  var target = document.querySelector(selector);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url + ".svg", true);
    ajax.send();

    // Append the SVG to the target
    ajax.onload = function(e) {
      target.innerHTML = ajax.responseText + target.innerHTML;
      afterFun();
    }
  } else {
    // Fallback to png
    target.innerHTML = "<img src='" + url+ ".png' />";
  }
  afterFun;
}
after = function(){
  document.querySelector("#schaubild_offenheit svg").setAttribute("width","100%");

  document.querySelector("#schaubild_offenheit #rechtl").onclick = function(){
    document.querySelectorAll("#schaubild_offenheit input")[0].checked=true;
    document.querySelectorAll("#schaubild_offenheit input")[1].checked=false;
  };


  document.querySelector("#schaubild_offenheit #techn").onclick = function(){
      document.querySelectorAll("#schaubild_offenheit input")[1].checked=true;
      document.querySelectorAll("#schaubild_offenheit input")[0].checked=false;

  };


  $("#schaubild_offenheit #rechtl").hover(function() {
    $("#schaubild_offenheit label").get(0).classList.add("schaubild_offenheit_hovered");
  }, function() {
    $("#schaubild_offenheit label").get(0).classList.remove("schaubild_offenheit_hovered");
  });


  $("#schaubild_offenheit #techn").hover(function() {
    $("#schaubild_offenheit label").get(1).classList.add("schaubild_offenheit_hovered");
  }, function() {
    $("#schaubild_offenheit label").get(1).classList.remove("schaubild_offenheit_hovered");
  });
};

loadSvg("#schaubild_offenheit","merkmale/schaubild_offenheit", after);
