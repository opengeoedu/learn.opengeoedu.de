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

};

loadSvg("#schaubild_interoperabilitaet","interoperabilitaet/interoperabilitaet", after);
