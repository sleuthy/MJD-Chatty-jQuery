function showMessages(mess){

	output = document.getElementById("messages");
	for(i=0; i<mess.length;i++){
		output.innerHTML += mess[i] + "<button id='i'>Delete</button><br>";
	}
}

Chatty.loadMessages(showMessages);