angular.module("githubViewer")

.controller("UserController", function($scope, github, $routeParams){
	// Isn't it cool we can inject http behavior with Angular?
	var onUserComplete = function(data){
		$scope.user = data;
		github.getRepos($scope.user).then(onRepos, onError);
	};

	var onRepos = function(data){
		$scope.repos = data;
	};

	var onError = function(err){
		$scope.error = "Could not get user."; 
	};
	
	$scope.username = $routeParams.username;
	$scope.repoSortOrder = "-stargazers_count"; // This is what ng-model = "repoSortOrder" is retrieving from"
	github.getUser($scope.username).then(onUserComplete, onError);
	
});