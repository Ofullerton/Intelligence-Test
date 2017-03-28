function continueButton (){
 window.location.href = "index2.html";
 }


function validateAnswer (){
  var  answerEntered = document.getElementById("answer").value;
  var x = document.getElementById('answer')
                  //this is where we choose the value we want


  if (answerEntered = 1738)
  {

    document.getElementById("answerGroup").classList.add("has-success");
    document.getElementById("answerGroup").classList.remove("has-error");
    document.getElementById("answerError").classList.remove("shown-message");
    document.getElementById("answerError").classList.add("hidden-message");
    }
    else (answerEntered != 1738) {
    document.getElementById("answerGroup").classList.add("has-error");
    document.getElementById("answerGroup").classList.remove("has-success");
    document.getElementById("answerError").innerHTML="Answer is not correct.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
}
}
