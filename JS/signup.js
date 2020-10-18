function myFunction() 
 {
 	var pwd= document.forms[0].ip1.value;
 	var cpwd= document.forms[0].ip2.value;
  	if(pwd==cpwd)
 	 {
 	 	alert("You Have Successfully Signed Up");
 	 	return true;
 	 }
 	else
 	 {
 	 	alert("Password and Confirm Password Should Be Same");
 	 	return false;
 	 }
 }
