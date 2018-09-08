var express = require('express');
var userCtrl = require('./controllers/userController');
var groupCtrl = require('./controllers/groupController');
var membershipCtrl = require('./controllers/membershipController');


var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  next();
});

/*router.get('*', function(req, res) {
     res.sendfile('./public/index.html'); // load our public/index.html file
});*/

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to challenge3' });
});

/************* User CRUD Operations ****************/
//Get All Users
router.get('/getAllUsers', userCtrl.getAllUsers);
//Create User
router.post('/createUser', userCtrl.createUser);
// Update User
router.put('/updateUser', userCtrl.updateUser);
//Delete User
router.delete('/deleteUser', userCtrl.deleteUser);

/************* Group CRUD Operations ****************/
//Get All Users
router.get('/getAllGroups', groupCtrl.getAllGroups);
//Create User
router.post('/createGroup', groupCtrl.createGroup);
// Update User
router.put('/updateGroup', groupCtrl.updateGroup);
//Delete User
router.delete('/deleteGroup', groupCtrl.deleteGroup);

/************* Membership CRUD Operations ****************/
//Get All Membership
router.get('/getAllMemberships', membershipCtrl.getAllMemberships);
//Get All User memberships
router.get('/getAllUserMemberships/:userId', membershipCtrl.getAllUserMemberships);
//Create Membership
router.post('/createUserMembership', membershipCtrl.createUserMembership);
// Update User
// router.put('/updateGroup', groupCtrl.updateGroup);
//Delete User
// router.delete('/deleteGroup', groupCtrl.deleteGroup);



module.exports = router;
