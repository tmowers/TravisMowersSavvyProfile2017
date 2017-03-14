var welcome = document.querySelector( "#prompt" );
var goodbye = document.querySelector( "#output" );
var responses = {
    "empty": "Please input a name",
    "correct": "Welcome to the website",
    "incorrect": ""
};
var nameTest = function nameText( name ){
    if( !name ){
        welcome.textContent = "Please input a name";
        console.log( welcome.textContent );
    }
    else if( name === "Travis" || name === "Trav" ){
        goodbye.textContent = "Welcome to my website.";
    }
    else if( name === )
    else{
        welcome.innerHTML = "<p>Please input <span class='emphasis'>CORRECT</span> name</p>";
    }

};

nameTest( prompt( "What is your name?" ) );
