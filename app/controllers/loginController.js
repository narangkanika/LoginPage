
(function() {

  angular.module("myApp.controllers", []).controller("loginController", function($scope,$location) {
    $scope.message = " ";
    /*$scope.users=["kanika","kanika"];
    function init() {
            loginFactory.getUsers()
                .then(function(response) {
                    $scope.username = response.data;
                    $scope.password = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        init();
      $scope.authenticateUsers = function(){
          if($scope.username === "kanika"){
            $scope.message="hii kanika";
          }
        };*/


  $scope.authenticateUsers=function(){
    var response;
    if ($scope.username === "kanika" && $scope.password === "narang") {
                  $location.path('/home');
                }
                else{
                  $scope.message = "You entered wrong credentials!!"
                }

};

});

}());
