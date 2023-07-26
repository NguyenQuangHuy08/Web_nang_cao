//Thuộc tính JS cho bài 1

var myApp = angular.module("bai1", []);

myApp.controller("myController", function ($scope) {

  $scope.in = function () {
    $scope.message = $scope.name;
  };

});

// Thuộc tính JS cho bài 2
var myApp = angular.module("bai2", []);
//Hàm nạp danh
myApp.controller("myController", function ($scope) {
  //Tạo đối tượng học sinh
  $scope.hocSinh = {
    name: "Nguyễn Quang Huy",
    age: 20,
    Adress: "Nam Định",
    Specialized: "Ứng Dụng Phần Mềm",
  };

});

//Thuộc tính JS cho bài 3

var myApp = angular.module("bai3", []);
//Hàm nạp danh
myApp.controller("myController", function ($scope) {
  //Tạo đối tượng học sinh
  $scope.sinhVien = {
    hoTen: "Nguyễn Quang Huy",
    gioiTinh: "Nam",
    ngaySinh: "08/03/2003",
    diem: "10",
  };

});


//Thuộc tính JS cho bài 4

var myApp = angular.module("bai4", []);
//Hàm nạp danh
myApp.controller("myController", function ($scope) {
  //Tạo đối tượng học sinh
  $scope.mangSinhVien = [

    {
      ten: "Nguyễn Quang Huy",
      ngayThangNamSinh: "08/03/2003",
      gioiTinh: "Nam",
      diem: "10",
    },
    {
      ten: "Nguyễn Thị Loan",
      ngayThangNamSinh: "11/08/2003",
      gioiTinh: "Nữ",
      diem: "9",
    },
    {
      ten: "Nguyễn Văn Huy",
      ngayThangNamSinh: "01/02/2003",
      gioiTinh: "Nam",
      diem: "9",
    },

  ];
});
