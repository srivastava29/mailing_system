function valid_user(to,cc)
{
var to_data,cc_data;
var to_check=to;
compose.orderByChild("to").equalTo(to_check).once('value', function (snapshot) {
       //snapshot would have list of NODES that satisfies the condition
	var snapdata= snapshot.val();
	   if(snapshot.exists)
	   {
		for(let val in snapdata)
		{
			//console.log(snapdata[val]);
			to_data=snapdata[val].to;
		}
		console.log("called again");
	   }

});
var res_to = to_check.split("@");
console.log(res_to);
if(cc!=null&&res_to.length==2)
{
var res_cc = cc.split("@");
if(res_cc.length==2)
{
return true;
}
else
{
return false;
}
}
if(to_data==to_check&&res_to.length==2&&cc==null)
{
return true;
}
else
{
return false;
}		

}