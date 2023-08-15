$(document).ready(function(){
    $("#fetchJoke").click(function(){
        $.ajax({
            url: "https://official-joke-api.appspot.com/random_joke",
            type: "GET",
            dataType: "json",
            success: function(result){
                console.log(result);
                $("#joke").html(result.setup + " <br> " + result.punchline);
            },
            error: function(error){
                console.log(`Error: ${error}`);
            }
        });
    });
});