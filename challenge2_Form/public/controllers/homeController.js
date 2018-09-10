/**
 * Controller name : homeController
 * View name : views/home.html
 */

(function(){

	angular
	.module('formApp')
	.controller('homeController',homeController);
	homeController.$inject = ['$scope', '$rootScope', '$location', '$http','$window'];

	function homeController ($scope, $rootScope, $location, $http, $window){	

		/** Harcoded the json for now in the controller. The same dynamic json can be stored in a stub
		 *  or can be stored in a DB, etc.
		 */
			$scope.content = {
							"fields": [{
									"name": "email",
									"label": "Email Address",
									"type": "email",
									"pattern": "/^[^@\s]+@[^@\s]+\.[^@\s]+$/",
									"required": true
									},{
									"name": "password",
									"label": "Password",
									"type": "password",
									"required": true
									},{
									"name": "password_2",
									"label": "Re-enter Password",
									"type": "password",
									"match": true,
									"from": "password"
									},{
									"name": "firstname",
									"label": "First Name",
									"type": "text"
									},{
									"name": "lastname",
									"label": "Last Name",
									"type": "text"
									},{
									"name": "age",
									"label": "Age",
									"type": "number"
									
									},{
									"name": "can_drive",
									"label": "Do you hold a valid drivers license?",
									"type": "radio",
									"options": ["Yes","No"],
									"from": "age",
									"gte": 17	
									}]
							}

			//Submit function				
			$scope.submitLoopform = function() {
                if(this.loopform.$invalid)
                    return;
			};	
			
			//General validations to be performed here
			$scope.validate = function(){
				if(this.f.from){
					for(var i in this.content.fields){
						if(this.content.fields[i].name == this.f.from && this.content.fields[i].value > this.f.gte){
							debugger
							return true;
						}
					}
				}else{
					return true;
				}
			}
    }
})();

