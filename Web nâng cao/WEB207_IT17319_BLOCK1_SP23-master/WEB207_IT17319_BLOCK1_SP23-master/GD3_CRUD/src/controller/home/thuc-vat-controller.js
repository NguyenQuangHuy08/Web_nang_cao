window.ThucVatController = function ($scope, $http) {
  // De giao tiep BE, FE dung phuong thuc HTTP de giao tiep
  // Su dung cac method (HTTP method): GET, POST, PUT, DELETE,...
  // CRUD : CREATE, READ, UPDATE, DELETE

  // HTTP status code : 200,201,400,401,404,403,500...
  // request: Nhung gia tri tu client => server (FE => BE)
  // => Giong cai tham so truyen vao cua 1 function
  // response : Ket qua tra ve tu phia server => client(BE => FE)
  // => Ket qua tra ve cua 1 function
  // GET : Hien thi du lieu <=> READ <=> SELECT
  $scope.danhSachThucVatHienThi = [];
  $scope.form_sinhVien = {
    ten: "",
    loai: "",
    gioiTinh: true,
  };

  $scope.viTriCanUpdate = -1;


  $http.get(thucVatAPI).then(function (response) {
    // if (response.status === 200) {
    //   $scope.danhSachThucVatHienThi = response.data;
    // }
    // console.log(response);
    if (response.statusText === "OK") {
      $scope.danhSachThucVatHienThi = response.data;
    }
  });

  // DELETE : Xoa
  $scope.removeStudent = function (event, index) {
    event.preventDefault();
    let tv = $scope.danhSachThucVatHienThi[index];
    let api = thucVatAPI + "/" + tv.id;
    $http.delete(api).then(function () {
      $scope.danhSachThucVatHienThi.splice(index, 1);
      alert("xoa thanh cong");
    });
  };

  // Detail hoa
  $scope.detailStudent = function (event, index) {
    event.preventDefault();
    let tv = $scope.danhSachThucVatHienThi[index];
    $scope.form_sinhVien.ten = tv.ten;
    $scope.form_sinhVien.loai = tv.loai;
    $scope.form_sinhVien.gioiTinh = tv.gioiTinh;
  };

  //ADD thêm dữ liệu <=> create <=> insert into

  $scope.addThucVat = function (event) {
    event.preventDefault();
    $http.post(thucVatAPI, $scope.form_sinhVien).then(function (r) {

      $scope.thucVat.push(r.data);

    });
  }


  //SỬA DỮ LIỆU NGƯỜI DÙNG <=> UPDATE 

  $scope.updateThucVat = function (event) {
    event.preventDefault();
    let tv = $scope.thucVat($scope.viTriCanDuocThayDoi);
    let api = thucVatAPI + "/" + tv.id;
    $http.post(api, $scope.form_sinhVien).then(function (r) {
      $scope.thucVat[$scope.viTriCanDuocThayDoi] = r.data;
    });
  };
};
