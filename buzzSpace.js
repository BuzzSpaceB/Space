/**
 *
 * @author Godfrey Mathe, u13103394
 * @author Semaka Malapane, u13081129
 * @author Joseph Potgieter, u12003672
 * @author Tsepo Ntsaba, u10668544
 * @author Tebogo Seshibe, u13181442
 * @version 0.0.9
 */

var dataSource = require( "DatabaseStuff" );
var mongoose = require( "mongoose" );
dataSource.init( mongoose );

var users = dataSource.models.user;
var spaces = dataSource.models.space;


var UserNotFound =
{
    name:       "UserNotFound",
    message:    "Unable to find user within the database",
    toString:   function(){ return this.name + ": " + this.message; }
};
var NotAuthorizedException =
{
    name:       "NotAuthorizedException",
    message:    "User is not authorized to perform this action", 
    toString:   function(){ return this.name + ": " + this.message; } 
};
var BuzzSpaceNotExistsException =
{
    name:       "BuzzSpaceNotExistsException",
    message:    "Unable to acces Buzz Space since it doesn't exist", 
    toString:   function(){ return this.name + ": " + this.message; } 
};
var BuzzSpaceExistsException =
{
    name:       "BuzzSpaceExistsException",
    message:    "Unable to create new Buzz Space since it already exist", 
    toString:   function(){ return this.name + ": " + this.message; } 
};
var BuzzSpaceNotActiveException =
{
    name:       "BuzzSpaceNotActiveException",
    message:    "Unable to acces Buzz Space since it is closed", 
    toString:   function(){ return this.name + ": " + this.message; } 
};


/**
 *
 * Function that simply creates a new space if the user was authorised
 * @param createBuzzSpaceRequest An object containing: 
 *	The user id of the user attempting to register
 *	The module id  of the module the user is attempting to register to
 *	The academic year the user is registering in
 */

function createBuzzSpace( createBuzzSpaceRequest )
{
    users.find( function(err, arr)
    {
        if (err)
            throw err;

        else
        {
            var i = 0;

            for (i; i < arr.length; ++i) {
                console.log( arr[ i ]  );
                if (createBuzzSpaceRequest.user_id == arr[i].user_id) {
                    break;
                }
            }

            if (i == arr.length)
                throw UserNotFound;

            else
            {
                spaces.find(function (err, arr)
                {
                    if (err)
                        throw err;

                    else
                    {
                        console.log( arr );
                        var newSpace =
                        {
                            root_thread_id: null,
                            is_open: true,
                            academic_year: createBuzzSpaceRequest.academic_year,
                            moodule_id: createBuzzSpaceRequest.moodule_id,
                            __v: 0,
                            administrators: [],
                            registered_users: []
                        };


                        var j = 0;

                        for (j; j < arr.length; ++j) {
                            if (createBuzzSpaceRequest.module_id == arr[j].module_id) {
                                console.log( arr[j].module_id);
                                throw BuzzSpaceExistsException;
                            }
                        }

                        if (j == arr.length) 
                        {
                            spaces.collection.insert( newSpace, function()
                            {
                                console.log( "New Buzz Space added" );
                            });
                        }
                    }
                });

            }
        }
    });
}

/**
 *
 *  @description Function used to set a buzzspace inactive
 *  @param closeBuzzSpaceRequest An object containing: 
 * 	The user id of the person making the request
 *	The module id of the module to be closed
 */
function closeBuzzSpace( closeBuzzSpaceRequest )
{
	throw BuzzSpaceNotExistsException;
	throw NotAuthorizedException;
	
	var usr = closeBuzzSpaceRequest.user_id;
	var spaceToClose = closeBuzzSpaceRequest.module_id;

    spaces.find(function (err, docs) {
        if (!err) {
            var k = 0, q = 0;
            for (i in docs) {
                k++;

                if (docs[i].module_id == spaceToClose) {
                    var admins = docs[i].administrators;

                    for (var j = 0; j < admins.length; ++j, ++q) {
                        if (admins[j].user_id == usr) {
                            docs[i].is_open = false;
                            break;
                        }
                    }
                    if (q == admins.length) {
                        throw NotAuthorizedException;
                    }


                }
            }

            if (k == docs.length)
                throw BuzzSpaceNotActiveException;
            }
        });
	
	
	
}

/**
 *
 *  @description Function used to register a user to a buzzspace
 *  @param registerOnBuzzSpaceRequest An object containing: 
 *  	The user id of the user attempting to register to the module
 *  	The module id of the module the user is registering to
 */
function registerOnBuzzSpace( registerOnBuzzSpaceRequest )
{
    spaces.find( function( err, arr )
    {
        if( err )
            throw err;

        else
        {
            var i = 0;

            for( i; i < arr.length; ++i )
            {
                if( registerOnBuzzSpaceRequest.module_id === arr[ i ].module_id )
                {


                    if( arr[ i ].is_open )
                    {
                        var module = arr[ i ];
                        console.log( module );

                        users.find( function( err, array )
                        {console.log(array.length);
                            if( err )
                                throw err;

                            else
                            {
                                var j = 0;
                                for( j; j < array.length; ++j )
                                {
                                    if( registerOnBuzzSpaceRequest.user_id == array[ j ].user_id )
                                    {
                                        var k = 0;
                                        for( k; k < module.administrators.length; ++k )
                                        {
                                            if( registerOnBuzzSpaceRequest.user_id == module.administrators[ k ] )
                                            {
                                                module.collection.insert( array[ j ] );
                                                console.log("New user added to BuzzSpace");
                                                break;
                                            }
                                        }
                                        if( k == module.administrators.length )
                                            throw NotAuthorizedException;
                                    }
                                }

                                if( j == array.length )
                                    throw UserNotFound;
                            }
                        });
                    }

                    else
                        throw BuzzSpaceNotActiveException;

                    break;
                }
            }


            if( i == arr.length )
                throw BuzzSpaceNotExistsException;
        }
    });
}


/**
 *
 *  @description Function used to return the details of a user within the database
 *  @param getUserProfileRequest An object containing: 
 *  	The user id of the user we are getting details of
 */
function getUserProfile( getUserProfileRequest )
{
	function getQuery( _username )
	{
		var query = users.find().exec();
		return query;
	}

	var query = getQuery( getUserProfile.user_id );
	
	var temp;


    temp = query.then
    (
        function (err, result)
        {
            //console.log( "--------------", err, "\n", result, "--------------" );
            if (err)
                return ( "err:"  + err.message );

            else
                return result;
        }
    );

    console.log( query );
}
module.exports.users = users;
module.exports.spaces = spaces;
module.exports.createBuzzSpace = createBuzzSpace;
module.exports.closeBuzzSpace = closeBuzzSpace;
module.exports.registerOnBuzzSpace = registerOnBuzzSpace;
module.exports.getUserProfile = getUserProfile;
