(function() {

    var app = angular.module('login', ['ngRoute', 'ngAnimate']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'loginController',
                templateUrl: 'app/views/login.html'
            })
            .when('/login', {
                controller: 'homeController',
                templateUrl: 'app/views/home.html'
            })

            .otherwise( { redirectTo: '/' } );
    });

}());
