var app = angular.module('app', []);

app.controller('firstController', function($scope){
	$scope.counter = 0;
	$scope.add = function(i){
		$scope.counter += i;
	};
	$scope.substrack = function(i){
		$scope.counter -= 1;
	};	
});

app.controller('MyController', function($scope){
	$scope.person = {
		name: "Mr. Floyd"
	};
});