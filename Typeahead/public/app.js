/**
 * Angular App is defined here
 */

(function(){
  'use strict';

  var typeaheadApp = angular.module('typeaheadApp', ['ui.router', 'ui.bootstrap']);
  typeaheadApp.config(routeConfig)
    .run(init);

    // Injections for routing
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      // Route patterns
        .state('home', {
          url: '/',
          templateUrl: '/views/home.html',
          controller: 'homeController'
        })
        
    }

    init.$inject = ['$rootScope'];

    function init ($rootScope) {


    }

    typeaheadApp.factory("States", function(){
        var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
      "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
      "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
      "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", 
      "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", 
      "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

      return states;
    });
})()


// https://angular-ui.github.io/

// setup app and pass ui.bootstrap as dep
// var myApp = angular.module("angularTypeahead", ["ui.bootstrap"]);

// define factory for data source
// myApp.factory("States", function(){
//   var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
//"Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", 
//"Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
//"Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", 
//"Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", 
//"Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  
//   return states;
  
// });

// setup controller and pass data source
// myApp.controller("TypeaheadCtrl", function($scope, States) {
	
// 	$scope.selected = undefined;
	
// 	$scope.states = States;
	
// });