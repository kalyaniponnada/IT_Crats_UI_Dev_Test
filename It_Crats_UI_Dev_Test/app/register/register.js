'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', function($scope) {
  $scope.phoneNumbr = /^\+?\d{2}[ ]?\d{2}[ ]?\d{3}[ ]?\d{5}$/;
  $scope.name = /^[a-zA-Z. ]*[a-zA-Z]{1,60}$/;
  $scope.submitForm = function(isValid) {

		if (isValid) { 
			alert('The was submitted');
		}
	};

});


