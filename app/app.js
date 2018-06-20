
var app = angular.module('AngularAuthApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

app.config(['$compileProvider',
  function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);
  }
]).config(function ($routeProvider) {

    $routeProvider.when("/homepage", {
        controller: "homepageController",
        templateUrl: "app/views/FrontEnd/homepage.html"
    });

    $routeProvider.when("/aboutus", {
        controller: "aboutusController",
        templateUrl: "app/views/FrontEnd/aboutus.html"
    });

    $routeProvider.when("/whatweoffer", {
        controller: "whatweofferController",
        templateUrl: "app/views/FrontEnd/whatweoffer.html"
    });

    $routeProvider.when("/meettheteam", {
        controller: "meettheteamController",
        templateUrl: "app/views/FrontEnd/meettheteam.html"
    });

    $routeProvider.when("/pricingplans", {
        controller: "pricingplansController",
        templateUrl: "app/views/FrontEnd/pricingplans.html"
    });

    $routeProvider.when("/farmhistory", {
        controller: "farmhistoryController",
        templateUrl: "app/views/FrontEnd/farmhistory.html"
    });

    $routeProvider.when("/getintouch", {
        controller: "getintouchController",
        templateUrl: "app/views/FrontEnd/getintouch.html"
    }); 

    $routeProvider.when("/fqpage", {
        controller: "fqpageController",
        templateUrl: "app/views/FrontEnd/fqpage.html"
    });

    $routeProvider.when("/notfound", {
        controller: "notfoundController",
        templateUrl: "app/views/FrontEnd/notfound.html"
    });

    $routeProvider.when("/checkout", {
        controller: "checkoutController",
        templateUrl: "app/views/FrontEnd/checkout.html"
    });

    $routeProvider.when("/shop", {
        controller: "shopController",
        templateUrl: "app/views/FrontEnd/shop.html"
    });


    $routeProvider.when("/viewcart", {
        controller: "viewcartController",
        templateUrl: "app/views/FrontEnd/viewcart.html"
    });


    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "app/views/signup.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersController",
        templateUrl: "/app/views/orders.html"
    });

    $routeProvider.when("/refresh", {
        controller: "refreshController",
        templateUrl: "/app/views/refresh.html"
    });

    $routeProvider.when("/tokens", {
        controller: "tokensManagerController",
        templateUrl: "/app/views/tokens.html"
    });

    $routeProvider.when("/associate", {
        controller: "associateController",
        templateUrl: "/app/views/associate.html"
    });

    $routeProvider.otherwise({ redirectTo: "/homepage" });

});

//var serviceBase = 'http://localhost:26264/';
var serviceBase = 'http://ngauthenticationapi.azurewebsites.net/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


