//create an array of strings, each related to a topic
const topics = ["Rugrats", "CatDog", "Power Puff Girls", "The Flintstones", "Kim Possible", "Scooby-Doo", "Looney Tunes", "ThunderCats", "DuckTales"];

//displayGifs function to display content to HTML
// const gifs = $(this).attr("datainame");
// const queryURL = "..." + "...";

"https://api.giphy.com/v1/gifs/search?api_key=8iYztG9g8pKSpLVmvZma6qEoSc9e2dxw&q=" + topics + "&limit=10&offset=0&rating=G&lang=en"

//create an AJAX call for the specific topic button being clicked
// $.ajax({
    // url: queryURL,
    //method: "GET"
// }).then(function(response){

// })

//create buttons from the topics | a loop might help

//on button click, 10 static, non-animated gifs should append to page
// $("#div").on("click", function(event){
    // event.preventDefault();

    //This should grab the new topic from user
    // const userTopic = $("#another-div").val().trim();

    //Add the topic to our array
    // topics.push(userTopic);
// })

//on gif click, gif should animate
//on gif click, gif should stop
//under every gif, display its rating
//add a form to page that takes the value and store it in topics array and makes a new button on page
//
