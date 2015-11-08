'use strict';

var myApp = angular.module('RentApp', [])
	.controller('RentCtrl', ['$scope', '$http', function($scope, $http) { 

	$scope.hello = "hello world";
  
}]);
