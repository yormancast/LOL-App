'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of swApp
 */
angular.module('lolApp')
  .controller('MainCtrl', function($scope,$http,$rootScope) {
    $rootScope.getName = function(i){
      $rootScope.sumName = i;
      $rootScope.url = "http://localhost:8080";
      $http({
         method: 'GET',
         url:$scope.url + '/api/riot/summonername/' + $scope.sumName,
         cache: true
      })
      .then(function (response) {
        var data = response.data;
        var body = angular.fromJson(data.body);
        $rootScope.sumDet = body;
        console.log($rootScope.sumDet);
        $rootScope.sumID = $rootScope.sumDet[$rootScope.sumName].id;
        $rootScope.name = $rootScope.sumDet[$rootScope.sumName].name;
        $rootScope.getStats();
      });
    };
    $rootScope.getStats = function(){
      $http({
         method: 'GET',
         url:$rootScope.url + '/api/riot/stats/' + $rootScope.sumID,
         cache: true
      })
      .then(function (response) {
        var dataStats = response.data;
        var bodyStats = angular.fromJson(dataStats.body);
        $rootScope.sumStats = bodyStats;
        console.log($rootScope.sumStats);
      });
    };
});
