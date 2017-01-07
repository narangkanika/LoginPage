(fucntion(){

var homeController = function($scope){

        $scope.message = "kanika";

};
      homeController.$inject = ['$scope'];

      angular.module('myApp.controllers')
        .controller('homeController', homeController);

  }());
