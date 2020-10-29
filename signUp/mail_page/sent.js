var to,sub,id,cc,from,body,type_new;
var i=0;
//clear DOm
function clear(type)
{
$("#content_container").empty();
$("#preview_container").empty();

showsent(type);
}
function showsent(type)
{
type_new=type;
compose.orderByChild("type").equalTo(type).once('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
	var snapdata= snapshot.val();
	//var keyarr=Object.keys(snapdata);
       //go through each item found and print out the emails
	   if(snapshot.exists)
	   {
	   var keyarr=Object.keys(snapdata);
	   console.log(keyarr);
	   i=0;
		for(let val in snapdata)
		{
			//console.log(snapdata[val]);
			to=snapdata[val].to;
			sub=snapdata[val].sub;
			from=snapdata[val].from;
			cc=snapdata[val].cc;
			id=keyarr[i++];
			createDiv(to,sub,id,from,cc);
			
		}
		
		console.log("called again");
	   }

});
		
		
		 }
		 
//show sent mail
function show_sent_mail()
{
console.log(this.id);
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
			load_sentData(to,from,cc,sub,body);
		}
	   }

});

}

//create divs
function createDiv(to,sub,id,from,cc)
{
var div=document.createElement("div");
div.style.width="400px";
div.style.height="50px";
div.style.background="white";
//div.style.top="-726px";
//div.style.left="400px";
div.style.margin="1px";
div.style.padding="20px";
div.style.border="2px solid black";
div.style.cursor="grab";
if(type_new=='sent')
{
div.innerHTML=to+"<br>"+sub;
div.onclick = show_sent_mail;
}
else if(type_new=='draft')
{
div.innerHTML=to+"<br>"+sub;
div.onclick = show_draft_mail;
}
else
{
div.innerHTML=from+"<br>"+sub+"<br>"+cc;
div.onclick = show_inbox_mail;
}
div.id=id;
document.getElementById("content_container").appendChild(div);
//console.log(div.id);
}

//set sent data
function load_sentData(to,from,cc,sub,body)
{
$("#preview_container").load("./sent.html", function(){
    console.log(to);
document.getElementById("to_2").value=to;
document.getElementById("from_2").value=from;
document.getElementById("cc_2").value=cc;
document.getElementById("sub_2").value=sub;
document.getElementById("body_2").value=body;
  });
}
//show draft mail

function show_draft_mail()
{
var div_id=this.id;
let listener=compose.child(div_id).once('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
	var snapdata= snapshot.val();
	var keyarr=Object.keys(snapdata);
        console.log(snapdata);
		
       //go through each item found and print out the emails
	   if(snapshot.exists)
	   {
		
			
			to=snapdata.to;
			from=snapdata.from;
			cc=snapdata.cc;
			sub=snapdata.sub;
			body=snapdata.text_area;
			load_draftData(to,from,cc,sub,body,div_id);
		
	   }
	  
});
}

//load draft data

function load_draftData(to,from,cc,sub,body,draft_id)
{
 let newWindow=window.open("./draft.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=900px,height=900px");
 newWindow.localStorage.setItem("draft_id",draft_id);
 newWindow.onload=function()
 {
 console.log(to);
var form_id=newWindow.document.getElementById("formid_draft");;
 console.log(id);
 form_id.to.value=to;
form_id.from.value=from;
form_id.cc.value=cc;
form_id.sub_3.value=sub;
form_id.txt_3.value=body;
  }
}