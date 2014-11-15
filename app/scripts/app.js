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
    'ngSanitize',
    'ngTouch',
    'fireUser',
    'firebase',
    'ui.router',
    'ui.bootstrap'

  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/home.html"
      })
    $stateProvider
      .state('booking', {
        url: "/booking",
        templateUrl: "views/booking.html",
        controller: 'booking'
      })


  });
