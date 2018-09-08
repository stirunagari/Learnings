var Membership = require('../models/membership');

module.exports = {
	getAllMemberships : function(req, res){
        
        //Fetch memberships from collection 'memberships'
        Membership.find(function(err, memberships) {
            //Handle any possible database errors, if not send back the response/message
				if (err)
					res.send(err);

				res.json(memberships);
			});
        },
        
    getAllUserMemberships : function(req, res){
        var userId = req.params.userId;

        Membership.find().where("user_id", userId).
			exec(function(err, userMemberships) {
				if (err)
					res.send(err);
				
				res.json({"userMemberships": userMemberships});
			});
    },    

    createUserMembership : function(req, res){
        //Create an object of type 'membership' with request body
		var membership = new Membership(req.body);
    
        //Insert the object into the collection : 'membership'
		membership.save(function(err) {
            
            //Handle any possible database errors, if not send back the response/message
			if (err)
				res.send(err);

			res.json({ message: 'User Membership created!' });
		});
    },
    
    updateUserMembership : function(req, res){
    
        //Search the record by id passed in the request body and then update the record
        Membership.findByIdAndUpdate(
            // the id of the item to find
            req.body._id, req.body, {new: true},

            // the callback function
            function(err, membership){
            // Handle any possible database errors
                    if (err) 
                        return res.send(err);

                    return res.send(membership);
            })
    },

    deleteUserMembership : function(req, res){
    
     //Here, search the record by id passed in the request body and then delete the record. 
     //We can pass any other parameter to search.

        Membership.findOneAndRemove({ _id: req.body._id},
            function(err){
            // Handle any possible database errors
                    if (err) 
                        res.send(err);

                    res.json({ message: 'User Membership deleted!' });
            });
    }
}