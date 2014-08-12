angular.module("githubViewer",["ngRoute"])
.config(function ($routeProvider) {
	$routeProvider
		.when("/home",{
			templateUrl:"search.html",
			controller: "SearchController"
		})
		.when("/user/:username", { // Ah, this is how you interpolate strings in the URL
			templateUrl: "user.html",
			controller: "UserController"
		})
		.when("/repos/:username/:reponame"{
			templateUrl: "repo.html",
			controller: "RepoController"
		})

		.otherwise({redirectTo:"/home"});
});