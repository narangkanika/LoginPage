(function() {
    var customersFactory = function($http) {

        var factory = {};

        factory.getUsers = function() {
            return $http.get('/');
        };
        return factory;
    };

    loginFactory.$inject = ['$http'];

    angular.module('myApp.controllers').factory('loginFactory',
                                           loginFactory);

}());
