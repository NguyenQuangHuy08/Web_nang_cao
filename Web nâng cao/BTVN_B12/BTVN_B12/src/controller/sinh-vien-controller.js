window.sinhviencontroller = function ($scope, $http) {
  $scope.danhSachSinhVienHienThi = [];
  $scope.form_sinhVien = {
    id: "",
    name: "",
    age: "",
    gender: true,
    address: "",
  };
  // List sinhVien
  $http.get(sinhVienAPI).then(function (response) {
    // if (response.status === 200) {
    //   $scope.danhSachThucVatHienThi = response.data;
    // }
    // console.log(response);
    if (response.statusText === "OK") {
      $scope.danhSachSinhVienHienThi = response.data;
    }
  });
  // DELETE
  $scope.removeStudent = function (event, index) {
    event.preventDefault();
    let sv = $scope.danhSachSinhVienHienThi[index];
    let api = sinhVienAPI + "/" + sv.id;
    $http.delete(api).then(function () {
      $scope.danhSachSinhVienHienThi.splice(index, 1);
      alert("Xóa sinh viên thành công !");
    });
  };

  // Detail
  $scope.detailStudent = function (event, index) {
    event.preventDefault();
    let sv = $scope.danhSachSinhVienHienThi[index];
    $scope.form_sinhVien.id = sv.id;
    $scope.form_sinhVien.name = sv.name;
    $scope.form_sinhVien.age = sv.age;
    $scope.form_sinhVien.gender = sv.gender;
    $scope.form_sinhVien.address = sv.address;
  };
  // Thêm
  $scope.addStudent = function (event) {
    event.preventDefault();
    $http.post(sinhVienAPI, $scope.form_sinhVien).then(function (response) {
      if (response.status === 201) {
        $scope.danhSachSinhVienHienThi.push($scope.form_sinhVien);
        alert("Thêm sinh viên thành công !");
      }
    });
  };
  // Hàm console để check :">
  $scope.check = function () {
    console.log($scope.form_sinhVien.gender);
  };
};
