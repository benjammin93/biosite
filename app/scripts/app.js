'use strict';

/**
 * @ngdoc overview
 * @name biosite
 * @description
 * # biosite
 *
 * Main module of the application.
 */
angular
  .module('biosite', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
