
$(document).ready(function(){
    $("button").click(function(){
        $.get("https://api.chucknorris.io/jokes/random", function(data){
            let joke=data.value;
            document.getElementById("text").innerHTML=joke;
        })
    })
})