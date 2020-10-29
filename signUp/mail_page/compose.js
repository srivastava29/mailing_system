var to;
var from;
var cc;
var sub;
var text_area;
var newCompose;
var loginmail=localStorage.getItem("email");
//save data userwise
var res = loginmail.split("@");
var compose= firebase.database().ref(res[0]);
console.log(res);
//save mail
/*function savemail(form)
{
event.preventDefault();
newCompose=compose.push();
newCompose.set({
to:to,
from:from,
cc:cc,
sub:sub,
text_area:text_area,
type:'draft'
});
alert("Mail Saved");
resetmail();
}
*/
function set_from()
{
var composeWindow=window.open("./compose.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=900px,height=900px");
composeWindow.onload=function(){
	  var compose_id=composeWindow.document.getElementById('formid_compose');
		compose_id.from.value=loginmail;
}
}

//reset compose

function resetmail()
{
event.preventDefault();
document.getElementById("formid").reset();
}

//sent mail

function sent_mail(to,from,cc,sub,text_area,type)
{
event.preventDefault();
newCompose=compose.push();
newCompose.set({
to:to,
from:from,
cc:cc,
sub:sub,
text_area:text_area,
type:type
});
alert("Mail valid");
}

//blank sent
function sent_valid(form,id)
{
event.preventDefault();
to= form.to.value;
from= form.from.value;
cc=form.cc.value;
sub=form.sub.value;
text_area=form.txt_area.value
if(to!=""&&from!=""&&text_area!="")
{
if(valid_user(to,cc)!=false)
{
if(id=="savebtn")
{
sent_mail(to,from,cc,sub,text_area,'draft');
}
else
{
sent_mail(to,from,cc,sub,text_area,'sent');
inbox_mail(to,from,cc,sub,text_area,'inbox');
if(cc!="")
{
cc_mail(to,from,cc,sub,text_area,'inbox');
}
}
}
else
{
alert("Sorry mail cannot be sent. This email id does not exist");
}
}
else
{
alert("invalid mail");
}
}