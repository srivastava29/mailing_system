//load inbox
$(document).ready(function() {
   $('#inbox').click(function() {
      $("#content_container").load("./inbox.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      console.log("External content loaded successfully!");
    if(statusTxt == "error")
      console.log("Error: " + xhr.status + ": " + xhr.statusText);
  });
});
});
//open compose window
$(document).ready(function() {
   $('#compose').click(function() {
  
      window.open("./compose.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=900px,height=900px");
	  
  });
});
//load draft
$(document).ready(function() {
   $('#draft').click(function() {
      $("#content_container").load("./draft.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      console.log("External content loaded successfully!");
    if(statusTxt == "error")
      console.log("Error: " + xhr.status + ": " + xhr.statusText);
  });
});
});
//load sent mails
$(document).ready(function() {
   $('#sent').click(function() {
      $("#content_container").load("./sent.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      console.log("External content loaded successfully!");
    if(statusTxt == "error")
      console.log("Error: " + xhr.status + ": " + xhr.statusText);
  });
});
});
