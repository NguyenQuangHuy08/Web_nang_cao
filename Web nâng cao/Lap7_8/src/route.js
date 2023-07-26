var myApp = angular.module("huyNguyen",["ngRoute"]);

myApp.config(function($routeProvider , $locationProvider){

    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/HOME",{

        templateUrl : "./pages/home.html",

    })
    .when("/DONGVAT",{

        templateUrl : "./pages/dongvat.html",
        controller : DongVatCtrl
        
    })

    .otherwise({
 
        redirectTo: "/HOME"

    })


});

