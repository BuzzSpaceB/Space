/**
 *
 * @author Godfrey Mathe, u13103394
 * @author Semaka Malapane, u13081129
 * @author Joseph Potgieter, u12003672
 * @author Tsepo Ntsaba, u10668544
 * @author Tebogo Seshibe, u13181442
 * @version 0.0.7
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
            console.log( "1Yay" );
            var i = 0;

            for (i; i < arr.length; ++i) {
                console.log( arr[ i ]  );
                if (createBuzzSpaceRequest.user_id == arr[i].user_id) {
                    //break;
                }
            }

            if (i == arr.length)
                throw UserNotFound;

            else
            {
                console.log( "2Yay" );
                spaces.find(function (err, arr)
                {
                    if (err)
                        throw err;

                    else
                    {
                        console.log( arr );
                        var newSpace =
                        {
                            root_thread_id: createBuzzSpaceRequest.root_thread_id,
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

                        if (j == arr.length) {

                            console.log( "---------------\n", arr,"\n---------------" );
                            spaces.collection.insert( newSpace, function()
                            {
                                console.log( "---------------\n", arr,"\n---------------" );
                            });
                        }
                    }
                });

            }
        }
    });



	//throw NotAuthorizedException;
}

/**
 *
 *  @description Function used to set a buzzspace inactive
 *  @param closeBuzzSpaceRequest An object containing: 
 * 	The username of the person making the request
 *	The module id of the module to be closed
 */
function closeBuzzSpace( closeBuzzSpaceRequest )
{
	throw BuzzSpaceNotExistsException;
	throw NotAuthorizedException;
}

/**
 *
 *  @description Function used to register a user to a buzzspace
 *  @param registerOnBuzzSpaceRequest An object containing: 
 *  	The username of the user attempting to register to the module
 *  	The module id of the module the user is registering to
 */
function registerOnBuzzSpace( registerOnBuzzSpaceRequest )
{
	throw BuzzSpaceNotActiveException;
	throw NotAuthorizedException;
}


/**
 *
 *  @description Function used to return the details of a user within the database
 *  @param getUserProfileRequest An object containing: 
 *  	The username of the user we are getting details of
 */
function getUserProfile( getUserProfileRequest )
{
	function getQuery( _username )
	{
		var query = users.find().exec();
		return query;
	}

	var query = getQuery( getUserProfile.username );
	
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

try {
    createBuzzSpace
    (
        {
            user_id: "u00000001",
            root_thread_id: "cfe51ce51351a31e13f13a1",
            academic_year: "2015",
            module_id: "WST 111"
        }
    );
}
catch( e )
{
    console.log( e );
}
