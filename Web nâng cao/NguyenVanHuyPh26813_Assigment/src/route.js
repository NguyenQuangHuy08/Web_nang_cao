var myApp = angular.module("huyNguyen", ["ngRoute"]);

myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/MAN", {
   
      templateUrl: "./pages/Man.html",
      controller : manCtrl,

    })
    .when("/WOMAN", {
   
      templateUrl: "./pages/Woman.html",
      controller: womanCtrl,

    })
    .when("/NEW", {
   
      templateUrl: "./pages/New.html",
      controller: newCtrol,


    })
    .when("/PAGES", {
   
      templateUrl: "./pages/Pages.html",
      controller: pagesCtrl,

    })

    .when("/INFORMATION", {
   
      templateUrl: "./pages/Information.html",
      controller: informationCtrl,
      
    })

    .when("/BLOGS", {
   
      templateUrl: "./pages/blogs.html",
      controller: blogsCtrl,
      
    })

    .when("/SHOP", {
   
      templateUrl: "./pages/shop.html",
       controller: shopCtrl,
      
    })
    .when("/PRODUCT" ,{

      templateUrl : "./pages/Product.html",
      controller : pagesCtrl,


    })


    // .when("/home/details/:id", {
      
    // })
    // .when("/SINH_VIEN", {

    //   templateUrl : "./pages/sinhVienPage.html",
    //   controller : sVienCtrl,



    // })


    // .when("/GIỚI_THIỆU", {

    //   templateUrl : "/src/pages/gioiThieu.html",
     
    // })
    .otherwise({
      redirectTo: "/MAN",
    });
});
