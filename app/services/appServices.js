
angular.module('myApp', [])
      .service('appServices', function () {


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
        .success(function(data, status) {
       $location.path('/home');
       return 'true';
      })
      .error(function(data, status, headers, config) {
        return 'false';
      });
       */
            for (var i=0,len=users.length;i<len;i++) {
               if (users[i].username === username) {
				   if(users[i].password === psswrd){


                   return 'true';
					   }
               }
            }
            return 'false';
        };


    };


  });
