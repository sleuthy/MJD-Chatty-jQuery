var Chatty = (function(taco) {

    taco.deleteMessages = function(mess){
        console.log("i am here within the deleteMessages function", mess);

        var aj = document.getElementsByClassName("delete");

        for(i=0;i<aj.length;i++){
            aj.item(i).addEventListener("click", function(event){
               // console.log("event", event.target.closest("div"));
                var deleteMessage = event.target.closest("div");

                var j = Number(event.toElement.id.slice(-1));

                console.log(mess);

                mess.splice(j, 1, "");

                console.log(mess);

                event.target.closest("div").remove();
                //console.log("deleteMessage", deleteMessage);
                if(messages.innerHTML == '') {
                    clear.setAttribute('disabled', true);
                }
            })
        }
    }
    return taco;
})(Chatty || {});

