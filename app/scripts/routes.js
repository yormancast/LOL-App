'use strict';
angular.module('lolApp')
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/app/home");
  // Now set up the states
  $stateProvider
    .state('app', {
      abstract:true,
      url: "/app",
      views:{
        'mainApp': {
          templateUrl: "views/main.html",
          controller: 'MainCtrl'
        }
      }
    })
    .state('app.home', {
      url:'/home',
      templateUrl: "views/home.html"
    });

});
