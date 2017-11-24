(function () {

    var app = angular.module('sampleApp',['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'art.html'
            })
            .when('/about',{
                templateUrl:'about.html'
            })
            .when('/contact',{
              templateUrl:'contact.html'
            })
            .otherwise({ redirectTo:'/'});
    });
})();
