var signupRef= firebase.database().ref('signup');
document.getElementById('formid').addEventListener('submit',savedata);
var flag=1;
var email_verify;
//authenticate data
function savedata(e)
{
e.preventDefault();
var fname=getVal('fname');
var lname=getVal('lname');
var email=getVal('email');
var emailc=getVal('emailc');
var pass=getVal('pass');
var passc=getVal('passc');
verify_user(email).then(function()
{
div_show();
if(email_verify==email)
  {
		
		div_show();
		document.getElementById('toast').innerHTML="Username already taken";
		flag=0;
		div_hide();//document.getElementById('email').setAttribute("placeholder", "Enter Email");
  }
else
{
if(verifypass(pass)!=null)
{
if(email!=emailc && pass!=passc)
{
div_show();
document.getElementById('toast').innerHTML="Email Id and Password not matching";
div_hide();
}
else if(pass!=passc)
{
div_show();
document.getElementById('toast').innerHTML="Password not matching";
div_hide();
}
else if(email!=emailc)
{
div_show();
document.getElementById('toast').innerHTML="Email Id not matching";
div_hide();
}
else
{
div_show();
signData(fname,lname,email,pass);
document.getElementById('toast').innerHTML="Data Saved";
div_hide();
}
}
else
{
div_show();
document.getElementById('toast').innerHTML="Password should be of min length 8 and include 1 uppercase, 1 lowercase, 1 digit and a special character";
div_hide();
}
}
});
}
//get form values
function getVal(id)
{
return document.getElementById(id).value;
}

//save data
function signData(fname,lname,email,pass)
{
var newSignUpRef=signupRef.push();
newSignUpRef.set({
fname:fname,
lname:lname,
email:email,
pass:pass
});
}
//verify unique username
function verify_user(email)
{

return new Promise(function(resolve,reject)
{
signupRef.orderByChild("email").equalTo(email).on('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
		var snapdata= snapshot.val();
        console.log(snapdata);
       //go through each item found and print out the emails
	   if(snapshot.exists)
	   {
		for(let val in snapdata)
		{
			console.log(snapdata[val]);
			email_verify=snapdata[val].email;
		}
		
		
		resolve();
	   }

});
});
  
   }    


//reset signup page
function reset()
{
event.preventDefault();
document.getElementById("formid").reset();
}
function verifypass(pass)
{
return pass.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
}
function div_hide()
{
setTimeout(function(){
document.getElementById('toast').style.display = 'none'},3000);
}
function div_show()
{
document.getElementById('toast').style.display = 'block';
}