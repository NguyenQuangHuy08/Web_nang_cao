var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      templateUrl: "./pages/home.html",
      controller: "sinhVienCtrl",
    })
    .when("/sinh-vien", {
      templateUrl: "./pages/sinh-vien.html",
      controller: "sinhVienCtrl",
    })
    .when("/sinh-vien/:id", {
      templateUrl: "./pages/sinh-vien.html",
    })
    .when("/sinh-vien/add", {
      templateUrl: "./pages/sinh-vien.html",
    })
    .when("/sinh-vien/:maSV/edit", {
      templateUrl: "./pages/sinh-vien.html",
    })
    .when("/sinh-vien/:maSV/delete", {
      templateUrl: "./pages/sinh-vien.html",
    })
    .when("/about", {
      templateUrl: "./pages/about.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});
app.controller("sinhVienCtrl", function ($scope, $http, $routeParams) {
  $scope.sinhViens = [];

  $scope.loai = "loai1";
  $scope.chuyenNganh = "udpm";
  $scope.gioiTinh = true;
  $scope.soThich = { an: "true", lan: "false" };

  $http.get(sinhVienAPI).then(function (response) {
    $scope.sinhViens = response.data;
  });

  $scope.detail = function (event, id) {
    event.preventDefault();
    var data = $scope.sinhViens.filter((item) => item.id === id)[0];
    console.log(data);
    $scope.ma = data.maSV;
    $scope.ten = data.ten;
    $scope.canNang = data.canNang;
    $scope.loai = data.loai;
    $scope.gioiTinh = data.gioiTinh;
    $scope.chuyenNganh = data.chuyenNganh;
    $scope.soThich = data.soThich;
    $scope.id = data.id;
  };
  $scope.them = function (event) {
    event.preventDefault();
    $http
      .post(sinhVienAPI, {
        maSV: $scope.ma,
        ten: $scope.ten,
        canNang: $scope.canNang,
        loai: $scope.loai,
        gioiTinh: $scope.gioiTinh,
        chuyenNganh: $scope.chuyenNganh,
        soThich: $scope.soThich,
      })
      .then(function (response) {
        alert("Thêm ok");
      });
  };
  $scope.sua = function (event, id) {
    event.preventDefault();
    $http
      .put(sinhVienAPI + "/" + id, {
        ten: $scope.ten,
        canNang: $scope.canNang,
        loai: $scope.loai,
        gioiTinh: $scope.gioiTinh,
        chuyenNganh: $scope.chuyenNganh,
        soThich: $scope.soThich,
      })
      .then(
        function (response) {
          alert("Sửa ok");
        },
        function (errors) {
          console.log(errors);
        }
      );
  };
  $scope.delete = function (event, id) {
    event.preventDefault();
    $http.delete(sinhVienAPI + "/" + id).then(function (response) {
      alert("Xóa thành công");
    });
  };
});
