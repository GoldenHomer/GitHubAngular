angular.module("githubViewer",["app.js"])

.controller("UserController", function($scope, $http, $routeParams){
	// Isn't it cool we can inject http behavior with Angular?
	var onRepos = function(res){
		$scope.repos = res.data;
	};

	var onError = function(err){
		$scope.err = "Could not get user."; 
	};

	var onUserComplete = function(res){
		$scope.user = res.data;
		$http.get($scope.user.repos_url)
			.then(onRepos, onError);
	};

	$scope.username = $routeParams.username;
	$scope.repoSortOrder = "-stargazers_count"; // This is what ng-model = "repoSortOrder" is retrieving from"
	$http.get("https://api.github.com/users/" + $scope.username).then(onUserComplete, onError); // Check if .search from app.js will work.
});