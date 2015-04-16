var buzz = require( "../buzzSpace" );

var Users =
[
    "u44444444",
    "u12345678",
    "u11008602",
    "u10075268",
    "u13410378",
    "u11111111",
    "u22222222",
    "u33333333",
    "u66666666",
    "u55555555"

];

var Modules =
[
    "COS 301",
    "COS 222",
    "COS 333",
    "COS 444",
    "COS 555",
    "COS 666",
    "COS 777",
    "COS 888",
    "COS 999",
    "COS 000"


];

function testGetUserProfile( test )
{
    for( var i = 0; i < Users.length; ++i )
    {
        test.equal( buzz.getUserProfile( Users[ i ] ), false, i < 5 ? "Should work. Valid users" : "Should not work. Invalid users" );
        test.done();
    }
}

function testCreateBuzzSpace( test )
{
    for( var i = 0; i < Users.length; ++i )
    {
        test.equal( buzz.testCreateBuzzSpace( Users[ i ] ), false, i < 5 ? "Should work. Valid users" : "Should not work. Invalid users" );
        test.done();
    }
}



buzz.getUserProfile( "u44444444" );

buzz.users.find( function( err, a ){  console.log( "+++" );  console.log( err ? err.message : a );  console.log( "+++" ); } );

buzz.spaces.find( function( err, a ){ console.log( "+++" ); console.log( err ? err.message : a );  console.log( "+++" ); } );


module.exports.testGetUserProfile = testGetUserProfile;
module.exports.testCreateBuzzSpace = testCreateBuzzSpace;
