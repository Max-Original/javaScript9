function validation(){
	let number, text;
	
	x.document.getElementById("userAge").value;
	
	if( x < 1 || x > 100){
		text = "Wrong input";
	}else{
		text = "Input ok"
	}
	document.getELementById("message").innerHTML = text;
}