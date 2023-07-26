var phongdz = angular.module("PhongModule", ["ngRoute"]);

phongdz.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/trang-chu", {
      templateUrl: "./pages/trang-chu.html",
      controller: sinhviencontroller,
    })
    .when("/sinh-vien", {
      templateUrl: "./pages/sinh-vien.html",
      controller: sinhviencontroller,
    })
    .when("/gioi-thieu", {
      templateUrl: "./pages/gioi-thieu.html",
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
