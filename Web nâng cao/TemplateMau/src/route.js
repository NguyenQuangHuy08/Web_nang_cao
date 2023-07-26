var myApp = angular.module("huyNguyen", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/HOME", {

      templateUrl: "/src/pages/home.html",


    })

    .when("/DONGVAT", {

      templateUrl: "/src/pages/dongVat.html",
      controller: dongVatAPI,


    })

    .otherwise({

      redirectTo: "/HOME",

    })




});