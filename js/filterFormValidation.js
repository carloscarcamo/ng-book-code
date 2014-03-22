var app = angular.module('myApp', []);

app.directive('ensureUnique', ['$http', function($http){
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

app.directive('ngFocus', [function(){
	var FOCUS_CLASS = "ng-focused";
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl){
			ctrl.$focused = false;
			element.bind('focus', function(evt){
				element.addClass(FOCUS_CLASS);
				scope.$apply(function(){
					ctrl.$focused = true;
				});
			}).bind('blur', function(evt){
				element.removeClass(FOCUS_CLASS);
				scope.$apply(function(){
					ctrl.$focused = false;
				});
			});

		}
	};
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