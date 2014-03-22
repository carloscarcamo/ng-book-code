/*var app = angular.module('app', []);

app.controller('MyController', function($scope, $parse){
	$scope.$watch('expr', function(newVal, oldVal, scope){
		if (newVal !== oldVal) {
			var parseFun = $parse(newVal);
			$scope.parsedValue = parseFun(scope);
		}
	});
});*/

//alternativa way - best practice
angular.module('app', [])
.controller('MyController',	['$scope', '$parse', function($scope, $parse){
	$scope.$watch('expr', function(newVal, oldVal, scope){
		if(newVal !== oldVal){
			var parseFun = $parse(newVal);
			$scope.parsedValue = parseFun(scope);
		}
	});
}]);