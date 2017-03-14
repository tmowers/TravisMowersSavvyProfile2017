var story = {
    "start": {
        "prompt": "You come home and see an angry dog in your house. Do you <p><span class="emphasis">approach</span> the dog or go back outside and call for help?",
        "options": [ "approach", "call" ]
    },
    "approach": {
        "prompt": "The dog bites you and runs upstairs. You realize that it's your own dog, so you sit down and self reflect on why he hates you.",
    },
    "call": {
        "The police show up and ask you what's wrong. You tell them that there is a mean dog in your house. The police investigate and discover that the dog belongs to you. You are cited for not having your dog registered."
};

var output = document.querySelector( "#output" );

var runStory = function runStory( choice ){
    var branch = story[ choice ];
    var action;

    if( firstAction === "approach" ){
        secondAction = prompt( story.approach );
    }
    else if( firstAction === "call" ){
        output.textContent = story.call;
    }
    else{
        output.textContent = "That wasn't a valid choice. Choose again.";
    }
};

runStory( "start" );
