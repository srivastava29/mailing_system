var email_;
var pass;
var signupRef= firebase.database().ref('signup');
function login(form)
{
event.preventDefault();
email_=form.email.value;
pass=form.pass.value;
if(email == "" || pass=="")
{
alert("fill Data");
}

//read data from firebase
signupRef.orderByChild("email").equalTo(email_).on('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
	console.log(snapshot.val());
        console.log('-----------');
 var pass_verify,fname,lname;
       //go through each item found and print out the emails
       snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key;
		var childData = childSnapshot.val();
		 pass_verify=childData.pass;
		 fname=childData.fname;
         console.log(fname);
		  if(pass_verify==pass)
  {
		localStorage.setItem("email", email_);
		localStorage.setItem("fname", fname);
		 window.open("/mail_page/mail.html","_self");
  }
else
{
alert("invalid credentials");
}
  });
 
});
}

