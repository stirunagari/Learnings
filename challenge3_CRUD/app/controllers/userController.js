var User = require('../models/user');

module.exports = {
	getAllUsers : function(req, res){
		//Fetch the records of the collection : User

			User.find(function(err, users) {
                //Handle any possible database errors, if not send back the response/message
				if (err)
					res.send(err);

				res.json(users);
			});
		},

	createUser : function(req, res){
        //Create an object of type 'User' with request body
		var user = new User(req.body);
	
		user.save(function(err) {
            //Handle any possible database errors, if not send back the response/message
			if (err)
				res.send(err);

			res.json({ message: 'User created!' });
		});
    },
    
    updateUser : function(req, res){
    //Search the record by id passed in the request body and then update the record
        User.findByIdAndUpdate(
            // the id of the item to find
            req.body._id, req.body, {new: true},

            // the callback function
            function(err, user){
            // Handle any possible database errors
                    if (err) 
                        return res.status(500).send(err);

                    return res.send(user);
            })
    },

    deleteUser : function(req, res){
    //Here, search the record by id passed in the request body and then delete the record. 
     //We can pass any other parameter to search.
        User.findOneAndRemove({ _id: req.body._id},
            function(err){
            // Handle any possible database errors
                    if (err) 
                        res.send(err);

                    res.json({ message: 'User deleted!' });
            });
    }
}