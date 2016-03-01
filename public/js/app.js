angular
	.module('jwtApp',['ngResource','ui.router'])
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home',{
				url:'/',
				templateUrl:'views/home.partial.html'
			})
			.state('register',{
				url:'/register',
				templateUrl:'views/jobs.partial.html'
			})
	});



