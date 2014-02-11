define(['angular'],function(){

	var sporten = angular.module('sporten', []);

	sporten.controller('mainCtrl', ['$scope', function($scope){
		$scope.init = function(){
			console.log('test')
		}
	}]);	

	return sporten;
});
