var myApp = angular.module("huyNguyen", []);


//demo Scope 

  myApp.controller("myController", function($scope , $rootScope){
  
     $scope.message = " haha";
     $rootScope.thongBao = "baba";

  });



// myApp.config(function ($routeProvider, $locationProvider) {

//   $locationProvider.hashPrefix("");

//   $routeProvider

//     .when("/TRANGCHU", {
  
//       templateUrl : "/On_Tap/src/pages/trangChu.html",
//       controller : sinhvienCtrl,

       
//     })

//     .when("/SINHVIEN", {
//       templateUrl : "/On_Tap/src/pages/sinhVien.html",
//       controller : sinhvienCtrl,

//     })
//     .when("/ABOUT", {

//       templateUrl : "./pages/about.html",

//     })

//     .otherwise({
//       redirectTo: "/TRANGCHU",
//     });



// });