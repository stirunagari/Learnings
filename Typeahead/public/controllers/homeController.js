/**
 * Controller name : homeController
 * View name : views/home.html
 */

(function(){

	angular
	.module('typeaheadApp')
	.controller('homeController',homeController);
	homeController.$inject = ['$scope', '$rootScope', '$location', '$http','$window', 'States'];

	function homeController ($scope, $rootScope, $location, $http, $window, States){	
		$scope.selected = undefined;
		// $scope.states = States;

		$scope.getLocations = function(){
			debugger;

			var url = "https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm="+$scope.destination;
			$http({
				method: 'GET',
				url: url
			  }).then(function(data){
				  $scope.destinations = data.data.results.docs;
			  },function(error) {
				  debugger;
			  });
		}

		$scope.startDictation = function(){

			if (window.hasOwnProperty('webkitSpeechRecognition')) {
		
			  var recognition = new webkitSpeechRecognition();
		
			  recognition.continuous = false;
			  recognition.interimResults = false;
		
			  recognition.lang = "en-UK";
			  recognition.start();
				
			  recognition.onresult = function(e) {
				document.getElementById('destination').value
										 = e.results[0][0].transcript;
				recognition.stop();
				debugger
				document.getElementById('locForm').submit();
			  };
		
			  recognition.onerror = function(e) {
				recognition.stop();
			  }
		
			}
		  }
    }
})();

