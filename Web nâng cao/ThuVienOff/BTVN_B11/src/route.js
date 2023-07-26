var app = angular.module("phongmodule", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/home", {
      templateUrl: "pages/home.html",
      controller: ControllerAo,
    })
    .when("/home/details/:id", {
      templateUrl: "pages/ao-details.html",
      controller: detailsAoctrl,
    })
    .when("/page", {
      templateUrl: "pages/page.html",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
