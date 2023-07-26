

var myApp = angular.module("huyNguyen", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/TRANG_CHU", {

      templateUrl: "./pages/trangChu.html",
      controller : sinhVienCtrl,

    })
    .when("/SINH_VIEN",{

      templateUrl : "./pages/sinhVienPage.html",
      controller : sinhVienCtrl,

    })

    .when("/GIỚI_THIỆU", {

      templateUrl: "./pages/gioiThieu.html",

    })


    .otherwise({

      redirectTo: "/TRANG_CHU"

    })

})


