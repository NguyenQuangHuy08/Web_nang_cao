window.sVienCtrl = function ($scope, $http) {

    $scope.danhSachSinhVien = [];
    $scope.from_sinhVien = {

        id: "",
        name: "",
        price: "",
        // coler: "",
        // type: "",

    };

    //list sinh viên
    $http.get(sinhVienAPI).then(function (response) {
        // if (response.status === 200) {
        //   $scope.danhSachThucVatHienThi = response.data;
        // }
        // console.log(response);

        if (response.statusText === "OK") {

            $scope.danhSachSinhVien = response.data;

        }
    });


    // DELETE : XÓA

    $scope.removeStudent = function (event, index) {
        event.preventDefault();
        let sv = $scope.danhSachSinhVien[index];
        let api = sinhVienAPI + "/" + sv.id;
        $http.delete(api).then(function () {
            $scope.danhSachSinhVien.splice(index, 1);
            alert("Xóa sinh viên thành công !");
        });
    };


    // DETAIL 
    $scope.detailStudent = function (event, index) {
        event.preventDefault();
        let sv = $scope.danhSachSinhVien[index];
        $scope.from_sinhVien.id = sv.id;
        $scope.from_sinhVien.name = sv.name;
        $scope.from_sinhVien.price = sv.price;
    };


    //ADD 
    $scope.addStudent = function (event) {
        event.preventDefault();
        $http.post(sinhVienAPI, $scope.from_sinhVien).then(function (response) {
            if (response.status === 201) {
                $scope.danhSachSinhVien.push($scope.from_sinhVien);
                alert("Thêm sinh viên thành công !");
            }
        });
    };
    // Hàm console để check :">
    $scope.check = function () {
        console.log($scope.from_sinhVien.gender);
    };



};