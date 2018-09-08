var Group = require('../models/group');

module.exports = {

	getAllGroups : function(req, res){
		//Fetch the records of the collection : Group
        Group.find(function(err, groups) {
            //Handle any possible database errors, if not send back the response/message

				if (err)
					res.send(err);

				res.json(groups);
			});
		},

	createGroup : function(req, res){
    //Create an object of type 'group' with request body
		var group = new Group(req.body);
	//Insert the object into the collection : 'group'
		group.save(function(err) {
    //Handle any possible database errors, if not send back the response/message   
			if (err)
				res.send(err);

			res.json({ message: 'Group created!' });
		});
    },
    
    updateGroup : function(req, res){
        //Search the record by id passed in the request body and then update the record    
        Group.findByIdAndUpdate(
            // the id of the item to find
            req.body._id, req.body, {new: true},

            // the callback function
            function(err, group){
            // Handle any possible database errors
                    if (err) 
                        return res.status(500).send(err);

                    return res.send(group);
            })
    },

    deleteGroup : function(req, res){
    //Here, search the record by id passed in the request body and then delete the record. 
     //We can pass any other parameter to search.

        Group.findOneAndRemove({ _id: req.body._id},
            function(err){
            // Handle any possible database errors
                    if (err) 
                        res.send(err);

                    res.json({ message: 'Group deleted!' });
            });
    }
}