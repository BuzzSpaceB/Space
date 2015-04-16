/**
 *
 * @author Godfrey Mathe, u13103394
 * @author Joseph Potgieter, u12003672
 * @author Semaka Malapane, u13081129
 * @author Tebogo Seshibe, u13181442
 * @author Tsepo Ntsaba, u10668544
 * @version 0.0.4
 */

var buzz = require( "../buzzSpace" );
var dataSource = require( "DatabaseStuff" );
var mongoose = require( "mongoose" );
dataSource.init( mongoose );

var users = dataSource.models.user;
var spaces = dataSource.models.space;

var Godfrey, Joseph, Semaka, Tebogo, Tsepo;
var MOD_001, MOD_010, MOD_011, MOD_100;

function add_users()
{
    Godfrey = users();
    Godfrey.user_id = "u13103394";
    Godfrey.username = "Godfrey";
    Godfrey.roles =
    [
        { module: "MOD 001", role: "Lecturer" },
        { module: "MOD 010", role: "Assistant Lecturer" },
        { module: "MOD 011", role: "Lecturer" },
        { module: "MOD 100", role: "Lecturer" }
    ];
    Godfrey.modules = [ "MOD 001", "MOD 010", "MOD 011", "MOD 100" ];
    Godfrey.post_count = 27;
    Godfrey.status_value = 3;

    Godfrey.save( function( err, user )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new user:", user.username );
    });

    /***************************************************************/

    Joseph = users();
    Joseph.user_id = "u12003672";
    Joseph.username = "Joseph";
    Joseph.roles =
    [
        { module: "MOD 001", role: "Assistant Lecturer" },
        { module: "MOD 010", role: "Lecturer" },
        { module: "MOD 011", role: "Assistant Lecturer" }
    ],
    Joseph.modules = [ "MOD 001", "MOD 010", "MOD 011" ];
    Joseph.post_count = 16;
    Joseph.status_value = 2;

    Joseph.save( function( err, user )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new user:", user.username );
    });

    /***************************************************************/

    Semaka.user_id = "u13081129";
    Semaka.username = "Semaka";
    Semaka.roles = 
    [
        { module: "MOD 001", role: "Student" },
        { module: "MOD 010", role: "TA" }
    ];
    Semaka.module = [ "MOD 001", "MOD 010" ];
    Semaka.post_count = 0;
    Semaka.status_value = 1;

    Semaka.save( function( err, user )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new user:", user.username );
    });

    /***************************************************************/

    Tebogo.user_id = "u13181442";
    Tebogo.username = "Tebogo";
    Tebogo.roles = 
    [
        { module: "MOD 010", role: "Student" },
        { module: "MOD 100", role: "Student" }
    ];
    Tebogo.module = [ "MOD 010", "MOD 100" ];
    Tebogo.post_count = 0;
    Tebogo.status_value = 0;

    Tebogo.save( function( err, user )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new user:", user.username );
    });

    /***************************************************************/

    Tsepo.user_id = "u10668544";
    Tsepo.username = "Tsepo";
    Tsepo.roles = 
    [
        { module: "MOD 011", role: "Student" },
        { module: "MOD 100", role: "Student" }
    ];
    Tsepo.module = [ "MOD 011", "MOD 100" ];
    Tsepo.post_count = 0;
    Tsepo.status_value = 0;
    
    Tsepo.save( function( err, user )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new user:", user.username );
    });
}

function remove_users( test )
{
    users.remove( { username: Godfrey.username }, function( err, user )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", user.username );
    });

    /***************************************************************/

    users.remove( { username: Joseph.username }, function( err, user )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", user.username );
    });

    /***************************************************************/

    users.remove( { username: Semaka.username }, function( err, user )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", user.username );
    });

    /***************************************************************/

    users.remove( { username: Tebogo.username }, function( err, user )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", user.username );
    });

    /***************************************************************/

    users.remove( { username: Tsepo.username }, function( err, user )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", user.username );
    });
}

function add_modules()
{
    MOD_001 = spaces();
    MOD_001.module_id = "MOD 001";
    MOD_001.registered_users =
    [
        { user_id: "u13103394" },
        { user_id: "u12003672" },
        { user_id: "u13081129" }
    ];
    MOD_001.academic_year = "2015";
    MOD_001.is_open = true;
    MOD_001.root_thread_id = "0xfffffffffffffff0";
    MOD_001.administrators = 
    [
        { user_id: "u13103394" },
        { user_id: "u12003672" }
    ];

    MOD_001.save( function( err, module )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new module:", user.module_id );
    });

    /***************************************************************/

    MOD_010 = spaces();
    MOD_010.module_id = "MOD 010";
    MOD_010.registered_users =
    [
        { user_id: "u13103394" },
        { user_id: "u12003672" },
        { user_id: "u13081129" },
        { user_id: "u13181442" }
    ];
    MOD_010.academic_year = "2015";
    MOD_010.is_open = true;
    MOD_010.root_thread_id = "0xfffffffffffffff1";
    MOD_010.administrators = 
    [
        { user_id: "u13103394" },
        { user_id: "u12003672" }
    ];

    MOD_010.save( function( err, module )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new module:", user.module_id );
    });

    /***************************************************************/

    MOD_011 = spaces();
    MOD_011.module_id = "MOD 011";
    MOD_011.registered_users =
    [
        { user_id: "u13103394" },
        { user_id: "u12003672" },
        { user_id: "u13081129" }
    ];
    MOD_011.academic_year = "2015";
    MOD_011.is_open = false;
    MOD_011.root_thread_id = "0xfffffffffffffff2";
    MOD_011.administrators = 
    [
        { user_id: "u13103394" },
        { user_id: "u12003672" }
    ];

    MOD_011.save( function( err, module )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new module:", user.module_id );
    });

    /***************************************************************/

    MOD_100 = spaces();
    MOD_100.module_id = "MOD 100";
    MOD_100.registered_users =
    [
        { user_id: "u13103394" },
        { user_id: "u12003672" },
        { user_id: "u13081129" }
    ];
    MOD_100.academic_year = "2015";
    MOD_100.is_open = false;
    MOD_100.root_thread_id = "0xfffffffffffffff3";
    MOD_100.administrators = 
    [
        { user_id: "u13103394" }
    ];

    MOD_001.save( function( err, module )
    { 
        if( err )
            console.log( err );

        else
            console.log( "Added new module:", user.module_id );
    });
}

function remove_module( test )
{
    MOD_001.remove( { module_id: MOD_001.module_id }, function( err, module )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", module.module_id );
    });

    /***************************************************************/

    MOD_010.remove( { module_id: MOD_010.module_id }, function( err, module )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", module.module_id );
    });

    /***************************************************************/

    MOD_011.remove( { module_id: MOD_011.module_id }, function( err, module )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", module.module_id );
    });

    /***************************************************************/

    MOD_100.remove( { module_id: MOD_100.module_id }, function( err, module )
    {
        if( err )
            console.log( err );

        else
            console.log( "Removed:", module.module_id );
    });
}

function add_test_data( test )
{
    add_users();
    test.done();

    add_modules();
    test.done();
}

function remove_test_data( test )
{
    remove_users();
    test.done();

    remove_modules();
    test.done();
}

function testCreateBuzzSpace( test )
{/*
    for( var i = 0; i < Create.length; ++i )
    {
        test.equals( buzz.createBuzzSpace( Create[ i ].param ), Create[ i ].success );
        test.done();
    }*/
    test.done();
}

function testCloseBuzzSpace( test )
{/*
    for( var i = 0; i < Close.length; ++i )
    {
        test.equals( buzz.closeBuzzSpace( Close[ i ].param ), Close[ i ].success );
        test.done();
    }*/
    test.done();
}


function testRegisterOnBuzzSpace( test )
{/*
    for( var i = 0; i < Register.length; ++i )
    {
        test.equals( buzz.registerOnBuzzSpace( Register[ i ].param ), Register[ i ].success );
        test.done();
    }*/
    test.done();
}
function testGetUserProfile( test )
{/*
    for( var i = 0; i < Get.length; ++i )
    {
        test.equals( buzz.getUserProfile( Get[ i ].param ), Get[ i ].success );
        test.done();
    }*/
    test.done();
}


module.exports.add_test_data = add_test_data;
module.exports.testCreateBuzzSpace = testCreateBuzzSpace;
module.exports.testCloseBuzzSpace = testCloseBuzzSpace;
module.exports.testRegisterOnBuzzSpace = testRegisterOnBuzzSpace;
module.exports.testGetUserProfile = testGetUserProfile;
module.exports.remove_test_data = remove_test_data;