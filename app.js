angular.module("githubViewer",[])

.controller("MainController", function($scope, $http){
	// Isn't it cool we can inject http behavior with Angular?
	var onUserComplete = function(res){
		$scope.user = res.data;
		$http.get($scope.user.repos_url)
			.then(onRepos, onError);
	};

	var onRepos = function(res){
		$scope.repos = res.data;
	}

	var onError = function(err){
		$scope.err = alert("Could not get user."); 
	}
	$scope.search = function(username){
		$http.get("https://api.github.com/users/" + username)
		// http methods return PROMISES. method 'then' is used to run a function when the promise is ready to be made.
		.then(onUserComplete, onError);
	};

	$scope.username = "angular";
	$scope.message = "GitHub Viewer";
	$scope.repoSortOrder = "";
});