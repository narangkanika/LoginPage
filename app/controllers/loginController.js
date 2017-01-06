(function(){

  var loginController = function($scope,$log,loginfactory){
    $scope.username="kanika ";
    $scope.password=" kanika";
    $scope.success = function() {
       $log.log("hii kanika");
    };

  }
}());
loginController.$inject = ['$scope', '$log','loginFactory'];

angular.module('login')
  .controller('loginController', loginController);
