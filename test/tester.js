var buzz = require( "../buzzSpace" );


var Create =
    [
        { param: { user_id: "u00000001", module_id: "COS301" }, success: false },
        { param: { user_id: "u00000001", module_id: "COS555" }, success: true },
        { param: { user_id: "u15494897", module_id: "COS666" }, success: false },
        { param: { user_id: "u00000001", module_id: "COS666" }, success: true },
        { param: { user_id: "u00000006", module_id: "COS332" }, success: false },
        { param: { user_id: "u00000006", module_id: "COS000" }, success: true }


    ];

var Close =
    [
        { param: { user_id: "u11111111", module_id: "COS301" }, success: true },
        { param: { user_id: "u00000001", module_id: "COS301" }, success: false },
        { param: { user_id: "u00000001", module_id: "COS555" }, success: false },
        { param: { user_id: "u15494897", module_id: "COS666" }, success: true },
        { param: { user_id: "u00000001", module_id: "COS666" }, success: true },
        { param: { user_id: "u99999999", module_id: "COS332" }, success: false },
        { param: { user_id: "u00000006", module_id: "COS000" }, success: true }
    ];

var Register =
    [
        { param: { user_id: "u00000001", module_id: "COS301" }, success: true },
        { param: { user_id: "u00000001", module_id: "COS301" }, success: false },
        { param: { user_id: "u00000001", module_id: "COS555" }, success: false },
        { param: { user_id: "u15494897", module_id: "COS666" }, success: true },
        { param: { user_id: "u00000001", module_id: "COS666" }, success: true },
        { param: { user_id: "u00000006", module_id: "COS332" }, success: false },
        { param: { user_id: "u00000006", module_id: "COS000" }, success: true }
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
    for( var i = 0; i < Create.length; ++i )
    {
        test.equals( buzz.createBuzzSpace( Create[ i ].param ), Create[ i ].success );
        test.done();
    }
}

function testCloseBuzzSpace( test )
{
    for( var i = 0; i < Close.length; ++i )
    {
        test.equals( buzz.closeBuzzSpace( Close[ i ].param ), Close[ i ].success );
        test.done();
    }
}


function testRegisterOnBuzzSpace( test )
{
    for( var i = 0; i < Register.length; ++i )
    {
        test.equals( buzz.registerOnBuzzSpace( Register[ i ].param ), Register[ i ].success );
        test.done();
    }
}
function testGetUserProfile( test )
{
    for( var i = 0; i < Get.length; ++i )
    {
        test.equals( buzz.getUserProfile( Get[ i ].param ), Get[ i ].success );
        test.done();
    }
}


module.exports.testCreateBuzzSpace = testCreateBuzzSpace;
module.exports.testCloseBuzzSpace = testCloseBuzzSpace;
module.exports.testRegisterOnBuzzSpace = testRegisterOnBuzzSpace;
module.exports.testGetUserProfile = testGetUserProfile;

