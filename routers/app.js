var demoApp =  angular.module('demoApp', ['ngRoute']);
    demoApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeController'
                }).
                when('/view2', {
                    templateUrl: 'partials/view2.html',
                    controller: 'HomeController'
                }).
                  otherwise({
                      redirectTo: '/'
                  });
    }]);
