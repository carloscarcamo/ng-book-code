/*angular.module('myApp', [])
	.controller('MyController', ['$scope', '$interpolate',
		function($scope, $interpolate){
			//set up watch
			$scope.$watch('emailBody', function(body){
				if(body){
					var template = $interpolate(body);
					$scope.previeText = template({to: $scope.to});					
				}
			});	
		}	
]);*/
angular.module('myApp', ['emailParser'])
	.controller('MyController', ['$scope', 'EmailParser',
		function($scope, EmailParser){
			//set up watch
			$scope.to = "carlos@gmail.com";
			$scope.emailBody = "Hello __to__";
			$scope.$watch('emailBody', function(body){
				if(body){
					$scope.previewText = 
						EmailParser.parse(body, {
							to:$scope.to
						});
				}
			});	
}]);

angular.module('emailParser', [])
	.config(['$interpolateProvider',
		function($interpolateProvider){
			//we change the {{}} by __
			$interpolateProvider.startSymbol('__');
			$interpolateProvider.endSymbol('__');
}])
.factory('EmailParser', ['$interpolate', 
	function($interpolate){
		// a service to handle parsing
		return {
			parse: function(text, context){
				var template = $interpolate(text);
				return template(context);
			}			
		}
}]);