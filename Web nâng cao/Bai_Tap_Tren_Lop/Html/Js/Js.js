//Thuộc tính js cho bài 1

//tạo biến chứa
var myApp = angular.module("huyNguyen", []);


myApp.controller("myController", function ($scope) {

  //cộng
  $scope.cong = function () {

    $scope.message = $scope.so1 + $scope.so2;


  }
  $scope.tru = function () {

    $scope.message = $scope.so1 - $scope.so2;


  }
  $scope.nhan = function () {

    $scope.message = $scope.so1 * $scope.so2;


  }
  $scope.chia = function () {

    $scope.message = $scope.so1 / $scope.so2;


  }


  //Thuộc tính js cho bài 2
  $scope.in = function () {

    $scope.message1 = $scope.name;

  };


  //Thuộc tính js cho bài 3

  $scope.hocSinh = {

    name: "Nguyễn Quang Huy",
    tuoi: "20",
    diaChi: "Nam Định",
    nganhHoc: "Công Nghệ Thông Tin"
  };

  //Thuộc tính js cho bài 4

  $scope.sinhVien = {

    name: "Nguyễn Quang Huy",
    gioiTinh: "Nam",
    ngaySinh: "08/03/2003",
    diem: "10",
  };

  //Thuộc tính js cho bài 5
  $scope.mangSinhVien = [

    {
      name: "Nguyễn Quang Huy",
      ngaySinh: "08/03/2003",
      gioiTinh: "Nam",
      diem: "10"
    },
    {
      name: "Nguyễn Quang Quân",
      ngaySinh: "08/04/2003",
      gioiTinh: "Nam",
      diem: "8"
    },
    {
      name: "Nguyễn Thị Lan",
      ngaySinh: "11/03/2003",
      gioiTinh: "Nữ",
      diem: "10"
    },

  ];

  //Thuộc tính js cho bài 6

  $scope.chuVi_dienTich = function () {

    $scope.chuVi = ($scope.chieuDai + $scope.chieuRong)*2;
    $scope.dienTich = $scope.chieuDai * $scope.chieuRong;
  };

});




