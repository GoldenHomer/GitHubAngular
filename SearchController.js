angular.module("githubViewer")

.controller("SearchController", function($scope, $http, $location){
	// Isn't it cool we can inject http behavior with Angular?

	$scope.search = function(username){
		$http.get("https://api.github.com/users/" + username)
		// http methods return PROMISES. method 'then' is used to run a function when the promise is ready to be made (when the GET HTTP is complete).
		.then(onUserComplete, onError);

		$location.path("/user/" + username); // /user/:username
	};
});