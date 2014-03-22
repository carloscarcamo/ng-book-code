var app = angular.module('myApp', [])
.directive('ensureUnique', ['$http', function($http){
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c){
			scope.$watch(attrs.ngModel, function(){
				//if(!n) return;
				$http({
					method: 'POST',
					url: '/api/check'+attrs.ensureUnique,
					data: {'field':attrs.ensureUnique}
				}).success(function(data, status, headers, cfg){
					c.$setValidity('unique', data.isUnique);
				}).error(function(data, status, headers, cfg){
					c.$setValidity('unique', false);
				});
			});
		}
	}
}]);

app.controller('signupController', ['$scope', function($scope){
	$scope.submitted = false;
	$scope.signupForm = function(){
		if($scope.signup_form.$valid){
			//submit as normal
		}else{
			$scope.signup_form.submitted = true;	
		}
	};
}]);