var module = angular.module("githubViewer");
// Creating a service

var github = function ($http) {
	var getUser = function (username){
		return $http.get("https://apigithub.com/users" + username)
		.then(function(res){
			return res.data
		})
	};
// When function github is called, $http.get returns a promise (know that).
// However, when you return a result that is invoked by a function that is within .then, that result a promise
// that is (in this case) res.data.

	var getRepos = function(user){
		return $http.get(user.repos_url)
				.then(function(res){
					return res.data
				})
	};

	var getRepoDetails = function(username, reponame){
		var repo;
		var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

		return $http.get("repoUrl").then(function(res){
			repo = res.data;
			return $http.get(repoUrl + "/collaborators"); // This promise will be processed by a .then below
		})
		.then(function(res){// This is the one that's doing the processing. Chaining promises
			repo.collaborators = res.data;
			return repo;
		});
	}

	return {
		getUser: getUser,
		getRepos: getRepos,
		getRepoDetails: getRepoDetails
		// These are what we get when we call method github.
	};
}

// then registering the service with Angular (this is one and easy way)
module.factory("github",github);