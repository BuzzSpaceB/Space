var buzz = require( "../buzzSpace" );

var Create =
[
    { param: { user_id: "u00000001", module_id: "COS 301" }, success: false },
    { param: { user_id: "u00000001", module_id: "COS 555" }, success: true },
    { param: { user_id: "u15494897", module_id: "COS 666" }, success: false },
    { param: { user_id: "u00000001", module_id: "COS 666" }, success: true },
    { param: { user_id: "u00000006", module_id: "COS 332" }, success: false },
    { param: { user_id: "u00000006", module_id: "COS 000" }, success: true }


];

var Close =
[
    { param: { user_id: "u00000001", module_id: "COS 301" }, success: true },
    { param: { user_id: "u00000001", module_id: "COS 301" }, success: false },
    { param: { user_id: "u00000001", module_id: "COS 555" }, success: false },
    { param: { user_id: "u15494897", module_id: "COS 666" }, success: true },
    { param: { user_id: "u00000001", module_id: "COS 666" }, success: true },
    { param: { user_id: "u00000006", module_id: "COS 332" }, success: false },
    { param: { user_id: "u00000006", module_id: "COS 000" }, success: true }
];

var Register =
[
    { param: { user_id: "u00000001", module_id: "COS 301" }, success: true },
    { param: { user_id: "u00000001", module_id: "COS 301" }, success: false },
    { param: { user_id: "u00000001", module_id: "COS 555" }, success: false },
    { param: { user_id: "u15494897", module_id: "COS 666" }, success: true },
    { param: { user_id: "u00000001", module_id: "COS 666" }, success: true },
    { param: { user_id: "u00000006", module_id: "COS 332" }, success: false },
    { param: { user_id: "u00000006", module_id: "COS 000" }, success: true }
];

var Get =
[
    { param: { user_id: "u44444444" }, success: true },
    { param: { user_id: "u10075268" }, success: true },
    { param: { user_id: "u11111111" }, success: false },
    { param: { user_id: "u22222222" }, success: false },
    { param: { user_id: "u33333333" }, success: false },
    { param: { user_id: "u11008602" }, success: true }

];

function testCreateBuzzSpace( test )
{
    for( var i = 0; i < Users.length; ++i )
    {
        test.equal( buzz.createBuzzSpace( Create[ i ].param ), Create[ i ].success );
        test.done();
    }
}

function testCloseBuzzSpace( test )
{
    for( var i = 0; i < Users.length; ++i )
    {
        test.equal( buzz.closeBuzzSpace( Close[ i ].param ), Close[ i ].success );
        test.done();
    }
}


function testRegisterOnBuzzSpace( test )
{
    for( var i = 0; i < Users.length; ++i )
    {
        test.equal( buzz.registerOnBuzzSpace( Register[ i ].param ), Register[ i ].success );
        test.done();
    }
}
function testGetUserProfile( test )
{
    for( var i = 0; i < Users.length; ++i )
    {
        test.equal( buzz.getUserProfile( Get[ i ].param ), Get[ i ].success );
        test.done();
    }
}


module.exports.testCreateBuzzSpace = testCreateBuzzSpace;
module.exports.testCloseBuzzSpace = testCloseBuzzSpace;
module.exports.testRegisterOnBuzzSpace = testRegisterOnBuzzSpace;
module.exports.testGetUserProfile = testGetUserProfile;
