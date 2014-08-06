angular.module("githubViewer",["ngRoute"])
.config(function ($routeProvider) {
	$routeProvider
		.when("/home",{
			templateUrl:"search.html",
			controller:"MainController"
		})
		.when("/user/:username",  // Ah, this is how you interpolate strings in the URL
			controller:"UserController"
			)
		.otherwise({redirectTo:"/home"});
})