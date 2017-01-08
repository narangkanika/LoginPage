
(function() {

angular.module("myApp.controllers", []).controller("loginController", function($scope) {
  $scope.message = " ";



$scope.login=function(){
  
  $scope.user = loginService.authenticateUser($scope.username,$scope.password);


};

})
.service("loginService",function($location,$http){
  //currently hardcoded the values and used them.
     var users= [
     {
       'username': 'sonali',
       'password' : '123'
     },

     {
       'username': 'kanika',
       'password' : 'abc'
     }

   ];


  //pass the username & psswrd you recieved via the $http.post() to call the webservice.
  //For http refer your factory and angularjs online documentation
      this.authenticateUser = function(username, psswrd) {
      //remove the below part  and the new logic here
      /* http post method
          ----------------------------------------------*/
      /* $http.post('/login', { username: username, password: password })
         .then(function successCallback(response) {
           $location.path('/home');
           return 'true';
     }, function errorCallback(response) {
         return 'false';
     });
     */
          var len=users.length
          for (var i=0;i<len;i++) {
             if (users[i].username === username) {
         if(users[i].password === psswrd){

            $location.path('/home');
                 return 'true';
           }
             }
          }
          return 'false';
      };


  });



}());
