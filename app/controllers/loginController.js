(function(){

  var loginController = function($scope,$log,$window,loginfactory){
    $scope.username="kanika ";
    $scope.password=" kanika";
    $scope.success = function() {
       $window.alert("hii kanika");
    };

  }

loginController.$inject = ['$scope', '$log','$window','loginFactory'];

angular.module('login')
  .controller('loginController', loginController);
}());
