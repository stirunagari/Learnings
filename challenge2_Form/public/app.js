/**
 * Angular App is defined here
 */

(function(){
  'use strict';
  angular
    .module('formApp', ['ui.router'])
  	.config(routeConfig)
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
})()


