'use strict';


angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
