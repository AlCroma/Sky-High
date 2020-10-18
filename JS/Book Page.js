	function sub()
	  {
		var depcity= document.forms[0].ip1.value;
		var retcity= document.forms[0].ip2.value;
		var depdate= document.forms[0].ip3.value;
		var retdate= document.forms[0].ip4.value;
		if(depcity == retcity)
		 {
			alert("Departing City And Returning City Can't Be Same");
			return false;
		 }
		else if(depdate > retdate)
		 {
			alert("Returning Date Should Be More Than Departing Date");
			return false;
		 }
		else
		 {
			alert("Booking Successful !Thank You For Choosing SkyHigh!");
			return true;
		 }
	  }