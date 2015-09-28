'use strict';
angular.module("angularRestfulAuth", [
    'ngStorage',
    'ngRoute'
])
    .controller('HomeCtrl',  ['$rootScope', '$scope', '$location', '$localStorage', 'Main', function($rootScope, $scope, $location, $localStorage, Main)
{
	//alert('here');
	    $scope.signin = function() {
			alert('signin');
            var formData = {
                email: $scope.email,
                password: $scope.password
            }
 
            Main.signin(formData, function(res) {
                if (res.type == false) {
                    alert(res.data)    
                } else {
                   // $localStorage.token = res.data.token;
                    alert('its ok')
					//window.location = "/";    
                }
            }, function() {
                $rootScope.error = 'Failed to signin';
            })
        };
}])
 .factory('Main', ['$http', '$localStorage', function($http, $localStorage){
        var baseUrl = "http://localhost:3001";
		
		/*
		function getUserFromToken() {
            var token = $localStorage.token;
            var user = {};
            if (typeof token !== 'undefined') {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
            }
            return user;
        }
 
        var currentUser = getUserFromToken();
 */
 
        return {
            save: function(data, success, error) {
                $http.post(baseUrl + '/signin', data).success(success).error(error)
            },
            signin: function(data, success, error) {
                $http.post(baseUrl + '/signin', data).success(success).error(error)
            },
            me: function(success, error) {
                $http.get(baseUrl + '/me').success(success).error(error)
            },
            logout: function(success) {
                changeUser({});
                delete $localStorage.token;
                success();
            }
        };
		
		
 }])/*;

angular.module('angularRestfulAuth', [
    'ngStorage',
    'ngRoute'
])*/
/*
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
 
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        }).
        when('/signin', {
            templateUrl: 'partials/signin.html',
            controller: 'HomeCtrl'
        }).
        when('/signup', {
            templateUrl: 'partials/signup.html',
            controller: 'HomeCtrl'
        }).
        when('/me', {
            templateUrl: 'partials/me.html',
            controller: 'HomeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        }); 
		 }])
//}]);*/