var nameTest = function nameText( name ){
    if( !name ){
        alert( "please input a name" );
    }
    else if( name === "Travis" ){
        alert( "Welcome to my website." );
    }
};

nameTest( prompt( "What is your name?" ) );
