'use strict';

/**
 * @ngdoc overview
 * @name swApp
 * @description
 * # swApp
 *
 * Main module of the application.
 */
angular.module('lolApp', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap'
  ])
  .constant("MainApiUrl", "http://localhost:8080")
