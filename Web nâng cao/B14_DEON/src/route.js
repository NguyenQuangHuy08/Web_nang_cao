var myApp = angular.module("huyNguyen", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/TRANG_CHU", {
   
      templateUrl: "./pages/trangChu.html",
      controller : sVienCtrl,

    })
    // .when("/home/details/:id", {
      
    // })
    .when("/SINH_VIEN", {

      templateUrl : "./pages/sinhVienPage.html",
      controller : sVienCtrl,



    })


    .when("/GIỚI_THIỆU", {

      templateUrl : "/src/pages/gioiThieu.html",
     
    })
    .otherwise({
      redirectTo: "/TRANG_CHU",
    });
});
