angular.module('myFilters', [])
	.filter('capitalize', function(){
		return function(input){
			if(input){
				return input[0].toUpperCase() + input.slice(1);
			}
		};
})
	.filter('capitalizeAll', function(){
		return function(input){
			if(input){	
				var i, words = input.split(" ");
				for(i=words.length; i--;){
					words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
				}	
				return words.join(" ");
			}
		};
});

angular.module('app', ['myFilters']);