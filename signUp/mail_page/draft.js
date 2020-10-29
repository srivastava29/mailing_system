function edit()
{
event.preventDefault();
document.getElementById("to").disabled = false;
document.getElementById("from").disabled = false;
document.getElementById("cc").disabled = false;
document.getElementById("sub").disabled = false;
document.getElementById("txt_area").disabled = false;
}

function send_draft(form,id)
{
sent_valid(form,id);
delete_draft();
}

function delete_draft()
{
var delete_id=localStorage.getItem("draft_id");
console.log(delete_id);
compose.child(delete_id).remove();
}

function save_draftnow()
{
event.preventDefault();
var to=getdraftVal('to');
var from =getdraftVal('from');
var cc=getdraftVal('cc');
var sub=getdraftVal('sub');
var body=getdraftVal('txt_area')
var update_id=localStorage.getItem("draft_id");
console.log(update_id+"uppdated");
compose.child(update_id).update(
{
to:to,
from:from,
cc:cc,
sub:sub,
text_area:body
}
);
}

function getdraftVal(id)
{
return document.getElementById(id).value;
}