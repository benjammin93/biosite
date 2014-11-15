'use strict';

/**
 * @ngdoc function
 * @name biosite.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the biosite
 */
angular.module('biosite')
  .controller('home', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
