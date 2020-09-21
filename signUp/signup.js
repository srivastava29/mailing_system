document.getElementById('formid').addEventListener('submit',savedata);
//save data
function savedata(e)
{
e.preventDefault();
var fname=getVal('fname');
var lname=getVal('lname');
var email=getVal('email');
var emailc=getVal('emailc');
var pass=getVal('pass');
var passc=getVal('passc');
if(email!=emailc && pass!=passc)
{
document.getElementById('toast').innerHTML="Email Id and Password not matching";
}
else if(pass!=passc)
{
document.getElementById('toast').innerHTML="Password not matching";
}
else if(email!=emailc)
{
document.getElementById('toast').innerHTML="Emai lId not matching";
}
else
{
alert("Data saved");
}
}
//get form values

function getVal(id)
{
return document.getElementById(id).value;
}