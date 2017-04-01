function continueButton()
{
window.location.href ="index2.html";
// setCookie("correct",2,1);
}
function continueButton1()
{
 window.location.href ="index3.html";
 getCookie("correct",2 ,1);
 setCookie("correct",2 ,1);
 }
function continueButton2()
{
  window.location.href ="index4.html";
  getCookie("correct",2 ,1);
  setCookie("correct",2 ,1);
  }
function continueButton3()
{
  window.location.href ="index5.html";
  getCookie("correct",2 ,1);
  setCookie("correct",2 ,1);
  }
function continueButton3()
{
  window.location.href ="index5.html";
  getCookie("correct",2 ,1);

  }
function continueButton4(){
  var total = document.cookie;
}
function validateAnswer() {
  var  x = document.getElementById("answer").value;
                  //this is where we choose the value we want
  if (x == 2243)
  {
    document.getElementById("answerGroup").classList.add("has-success");
    document.getElementById("answerGroup").classList.remove("has-error");
    document.getElementById("answerError").classList.remove("shown-message");
    document.getElementById("answerSuccess").classList.add("hidden-message");
    }
    else
  {
    document.getElementById("answerGroup").classList.add("has-error");
    document.getElementById("answerGroup").classList.remove("has-success");
    document.getElementById("answerSuccess").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
}
}
function validateAnswer2(){
  var  y = document.getElementById("answer2").value;
                  //this is where we choose the value we want
  if (y == 352)
  {
    document.getElementById("answerGroup").classList.add("has-success");
    document.getElementById("answerGroup").classList.remove("has-error");
    document.getElementById("answerError").classList.remove("shown-message");
    document.getElementById("answerSuccess").classList.add("hidden-message");
    }
    else
  {
    document.getElementById("answerGroup").classList.add("has-error");
    document.getElementById("answerGroup").classList.remove("has-success");
    document.getElementById("answerSuccess").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
}
}

function validateAnswer3(){
  var  z = document.getElementById("answer2").value;
                  //this is where we choose the value we want
  if (z == 5)
  {
    document.getElementById("answerGroup").classList.add("has-success");
    document.getElementById("answerGroup").classList.remove("has-error");
    document.getElementById("answerError").classList.remove("shown-message");
    document.getElementById("answerSuccess").classList.add("hidden-message");
    }
    else
  {
    document.getElementById("answerGroup").classList.add("has-error");
    document.getElementById("answerGroup").classList.remove("has-success");
    document.getElementById("answerSuccess").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
}
}
//Generously borrowed from w3 https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Generously borrowed from w3 https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
