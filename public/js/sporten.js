define(['angular', 'animate'],function(){
	'use strict';
	
	var sporten = angular.module('sporten', []);

	sporten.controller('mainCtrl', ['$scope',function($scope){
		$scope.authenticated = undefined;

		$scope.init = function(){
			console.log('init');
			$scope.authenticated = true;
			return $scope.authenticated;
		};

	}]);	

	return sporten;
});
