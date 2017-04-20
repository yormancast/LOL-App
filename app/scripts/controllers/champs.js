'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:FilmsCtrl
 * @description
 * # FilmsCtrl
 * Controller of swApp
 */
angular.module('lolApp')
  .controller('ChampsCtrl', function($scope, $http, $rootScope) {
    console.log($rootScope.MainUrl);
    // $http({
    //    method: 'GET',
    //    url:$rootScope.MainUrl + '/api/riot/champs',
    //    cache: true
    // })
    // .then(function (response) {
    //   var data = response.data;
    //   var body = angular.fromJson(data.body);
    //   $scope.champs = body.data;
    //   console.log($scope.champs);
    // });
  });//end controller
