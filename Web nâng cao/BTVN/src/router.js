var myapp = angular.module("huyNguyen", ["ngRoute"]);

myapp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix("");
    $routeProvider

        .when("/HOME", {

            templateUrl: "/src/pages/homePage.html",
            controller: AoController,


        })

        .when("/PAGES", {

            templateUrl: "/src/pages/Pages.html"



        })

        .otherwise({

            redirecTo: "/HOME",
        }


        )


});