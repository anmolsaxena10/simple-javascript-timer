var finalDate;
var millsPsec = 1000;
var millsPmin = millsPsec*60;
var millsPhr = millsPmin*60
var millsPday = millsPhr*24;
var t;

$(document).ready(function(){
	
	$("#startCount").click(function(){
		finalDate = new Date($("#targetDate").val());
		t = setInterval(updateCounter,1000);
	});
});

function updateCounter(){
	
	var currentDate = new Date();	
	var remainingMills = finalDate.getTime() - currentDate.getTime();
	
	if(remainingMills > 0){
	
		var days = parseInt(remainingMills/millsPday);
		var hrs = parseInt((remainingMills - days*millsPday)/millsPhr);
		var mins = parseInt((remainingMills - days*millsPday - hrs*millsPhr)/millsPmin);
		var secs = parseInt((remainingMills - days*millsPday - hrs*millsPhr - mins*millsPmin)/millsPsec);
		
		console.log(remainingMills);
		
		//$("#displayCount").html("<h1>"+days+" Days "+hrs+"h:"+mins+"m:"+secs+"s</h1>");
		
		$("#day").html(days);
		$("#hr").html(hrs);
		$("#min").html(mins);
		$("#sec").html(secs);
	}
	else{
		clearInterval(t);
	}
}