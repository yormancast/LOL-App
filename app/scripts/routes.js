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
          templateUrl: "views/main.html"
        }
      }
    })
    .state('app.home', {
      url:'/home',
      templateUrl: "views/home.html",
      controller: 'MainCtrl'
    })
    .state('app.home.stats', {
      url:'/stats',
      templateUrl: "views/home-stats.html"      
    })
    .state('app.champions', {
      url:'/champions',
      templateUrl: "views/champions.html",
      controller: 'ChampsCtrl'
    });

});
