var myApp = angular.module("huyNguyen", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix("");

  $routeProvider

    .when("/HOME", {

      //  template: "<h1> Anh yêu</h1>",
      templateUrl: "./pages/Home.html",
      controller: hoaQuaCtrl,

    })

    .when("/HOME/hoaQua-Detail-Controller/:id", {
      templateUrl: "./pages/hoaQua.html",
      controller: hoaQuaDetailsCtrl,

    })

     .when("/SHOP", {
      // Nội dung
      // templateUrl: "./pages/Shop.html",
      template: "<h1>Shop?</h1>",

    })
    .when("/PAGES", {
      template: "<h1>PAGES?</h1>",
    })
    .when("/BLOG", {
      template: "<h1>bLOG?</h1>",
    })

    .when("/CONTACT", {
      template: "<h1>Contact?</h1>",
    })

    .otherwise({
      redirectTo: "/HOME",
    });



});