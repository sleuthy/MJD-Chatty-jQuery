var clear = document.getElementById('clear'),
    input = document.getElementById('usr-input'),
    messages = document.getElementById('messages'),
    darkTheme = document.getElementById('darkTheme'),
    nav = document.getElementById('nav'),
    largeText = document.getElementById('makeLarge');
    var save = document.getElementById("save");


clear.addEventListener('click', function(){
    messages.innerHTML = '';
    clear.setAttribute("disabled", true);
   // console.log(clear);
});

input.addEventListener ("keypress", function(key) {
    if (key.keyCode === 13) {
    	clear.removeAttribute("disabled");
    	//console.log(clear);
    }
});

darkTheme.addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('dark');
    nav.classList.toggle('navbar-inverse');
    nav.classList.toggle('navbar-default');
    messages.classList.toggle('dark-msg');
});

largeText.addEventListener('click', function(){
    document.getElementsByTagName('body')[0].classList.toggle('larger');
});

save.addEventListener("click", function(event){
    bgcolor = document.getElementById("mybgColor").value;
    fontcolor = document.getElementById("myfontColor").value;
    console.log("i am here within save event listener", bgcolor,fontcolor);
    document.body.style.background = bgcolor;
    document.body.style.color = fontcolor;
});

Chatty.loadMessages();