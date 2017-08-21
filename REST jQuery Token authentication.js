var apiKey = "set api key";
var userName = "j.t.kirk";
var tokenID;

// Globally handle all ajax errors
$(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
  alert(JSON.stringify(jqxhr));
});

// Create token and 
$.ajax({
    method: "POST",
    beforeSend: function(request) 
    {
        request.setRequestHeader("x-api-version", "1");
        request.setRequestHeader("Accept","application/vnd.example.api+json");
    },
    url: "http://iprova/api/tokens",
    contentType: "application/json",
    data: JSON.stringify({"api_key":apiKey,"username":userName}),
    success: function (result)
    {
        tokenID = result;
        createCard();
    }
});
