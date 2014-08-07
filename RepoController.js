angular.module("githubViewer")

.controller("RepoController", function ($scope, $routeParams, github) {

	var onRepo = function(data){
		$scope.repo = data;
	};

	var onError = function(err){
		$scope.error = err;
	};
	
	var reponame = $routeParams.reponame;
	var username = $routeParams.username;

	github.getRepoDetails(username,reponame)
		.then(onRepo, onError);
})