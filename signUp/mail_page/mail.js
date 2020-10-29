//load inbox

$(document).ready(function() {
var fname=localStorage.getItem("fname");
document.getElementById('hi').innerHTML= "Hi"+" "+fname;
var composeWindow;
   $('#inbox').click(function() {
      clear_inbox();
  });
//open compose window
$('#compose').click(function() {
		
      set_from();
	  $("#preview_container").empty();
	  
	  
  });
 //load draft 
 $('#draft').click(function() {
 clear('draft');
      /*$("#content_container").load("./draft.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      console.log("External content loaded successfully!");
    if(statusTxt == "error")
      console.log("Error: " + xhr.status + ": " + xhr.statusText);*/
  });
//load sent mails
$('#sent').click(function() {
  clear('sent');
});
$('#logout').click(function() {
 firebase.auth().signOut().then(function() {
  window.location.replace('/login/login.html');
}, function(error) {
  console.log(error);
});
  });
});
