function inbox_mail(to,from,cc,sub,text_area,type)
{
var res = to.split("@");
var inbox= firebase.database().ref(res[0]);
console.log(res);
event.preventDefault();
newInbox=inbox.push();
newInbox.set({
to:to,
from:from,
cc:cc,
sub:sub,
text_area:text_area,
type:type
});
console.log("Inbox Mail saved");
}

function clear_inbox()
{
$("#content_container").empty();
$("#preview_container").empty();
showsent('inbox');
}

function show_inbox_mail()
{
var div_id=this.id;
compose.child(div_id).once('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
	var snapdata= snapshot.val();
	var keyarr=Object.keys(snapdata);
        console.log(snapdata);
		
       //go through each item found and print out the emails
	   if(snapshot.exists)
	   {
		for(let val in snapdata)
		{
			
			to=snapdata.to;
			from=snapdata.from;
			cc=snapdata.cc;
			sub=snapdata.sub;
			body=snapdata.text_area;
			load_inboxData(to,from,cc,sub,body);
		}
	   }

});

}

function cc_mail(to,from,cc,sub,text_area,type)
{
var result=cc.split("@");
var cc_mail= firebase.database().ref(result[0]);
console.log(res);
event.preventDefault();
ccInbox=cc_mail.push();
ccInbox.set({
to:to,
from:from,
cc:cc,
sub:sub,
text_area:text_area,
type:type
});
console.log("Inbox Mail saved");
}

function load_inboxData(to,from,cc,sub,body)
{
$("#preview_container").load("./inbox.html", function(){
    console.log(to);
document.getElementById("to_3").value=to;
document.getElementById("from_3").value=from;
document.getElementById("cc_3").value=cc;
document.getElementById("sub_3").value=sub;
document.getElementById("body_3").value=body;
  });
}