'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of swApp
 */
angular.module('lolApp')
  .controller('MainCtrl', function($scope,$http,$rootScope, MainApiUrl) {
    $scope.getName = function(i){
      $scope.sumName = i;
      $http({
         method: 'GET',
         url:MainApiUrl + '/api/riot/summonername/' + $scope.sumName,
         cache: true
      })
      .then(function (response) {
        var data = response.data;
        var body = angular.fromJson(data.body);
        $scope.sumDet = body;
        $scope.sumID = $scope.sumDet[$scope.sumName].id;
        $scope.name = $scope.sumDet[$scope.sumName].name;
        $scope.getStats();
      });
    };
    $scope.getStats = function(){
      $http({
         method: 'GET',
         url:MainApiUrl + '/api/riot/stats/' + $scope.sumID,
         cache: true
      })
      .then(function (response) {
        var dataStats = response.data;
        var bodyStats = angular.fromJson(dataStats.body);
        $scope.sumStats = bodyStats;
        console.log($scope.sumStats);
      });
    };
});
