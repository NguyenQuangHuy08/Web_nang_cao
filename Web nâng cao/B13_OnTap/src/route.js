var myApp = angular.module("huyNguyen", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/HOME", {
   
      templateUrl: "./pages/Home.html",
      controller : sVienCtrl,

    })
    
    .when("/PAGES", {

      templateUrl : "./pages/Page.html",
      controller : sVienCtrl,

    })

    .otherwise({
      redirectTo: "/HOME",
    });
});
