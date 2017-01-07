
(function() {

    var app = angular.module('myApp', ['ngRoute', 'ngAnimate','myApp.controllers']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'loginController',
                templateUrl: 'app/views/login.html'
            })
            .when('/home', {
                controller: 'userHomeController',
                templateUrl: 'app/views/userHome.html'
            })

            .otherwise( { redirectTo: '/' } );
    });

}());
