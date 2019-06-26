//create an array of strings, each related to a topic
const topics = ["Rugrats", "CatDog", "Power Puff Girls", "The Flintstones", "Kim Possible", "Scooby-Doo", "Looney Tunes", "ThunderCats", "DuckTales"];

//displayGifs function to display content to HTML
function displayGifs() {

    const gifs = $(this).attr("data-name");
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8iYztG9g8pKSpLVmvZma6qEoSc9e2dxw&q=" + gifs + "&limit=10&lang=en"
    
    //create an AJAX call for the specific topic button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
        //Create a div to hold the gifs
        const gifDiv = $("<div class='gif'>");
        
        //Storing the rating
        const rating = response.Rated;
        
        //Creating an element to display rating
        const ratingDiv = $("<p>").text("Rating: " + rating);
        
        //Display the rating
        //under every gif, display its rating
        gifDiv.append(ratingDiv);
        $("#view-gifs").prepend(gifDiv);
    });
            
}


//Function to display the gifs
function renderButtons() {
    $("#button-view").empty();
    
    //create buttons from the topics | a loop might help
    for (let i = 0; i < topics.length; i++) {
        const bb = $("<button>");
        bb.addClass("gif-btn")
        bb.attr("data-name", topics[i])
        bb.text(topics[i]);
        $("#button-view").append(bb);
    }
}

//on button click, 10 static, non-animated gifs should append to page
/*$("#add-topic").on("click", function(event){
    event.preventDefault();

    //This should grab the new topic from user
    const userTopic = $("#topic-input").val().trim();

    //Add the topic to our array
    topics.push(userTopic);
    renderButtons();
})*/

$(document).on("clcik", ".gif-btn", displayGifs);
renderButtons();

//on gif click, gif should animate
//on gif click, gif should stop
//
