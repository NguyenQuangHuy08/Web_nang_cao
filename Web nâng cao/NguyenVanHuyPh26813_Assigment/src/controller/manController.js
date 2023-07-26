// danh sách list man 1
window.manCtrl = function ($scope, $http) {

    $scope.danhSach = [];
    $scope.man = {

        id: "",
        name: "",
        price: "",
        image: "",


    };

    //list man 1
    $http.get(manAPI).then(function (response) {


        if (response.statusText === "OK") {

            $scope.danhSach = response.data;

        }
    });

    // list man 2
    $scope.danhSach2 = [];

    $http.get(manAPI2).then(function (response) {


        if (response.statusText === "OK") {

            $scope.danhSach2 = response.data;

        }
    });



    // DELETE : XÓA

    // $scope.removeStudent = function (event, index) {
    //     event.preventDefault();
    //     let sv = $scope.danhSach[index];
    //     let api = sinhVienAPI + "/" + sv.id;
    //     $http.delete(api).then(function () {
    //         $scope.danhSach.splice(index, 1);
    //         alert("Xóa sinh viên thành công !");
    //     });
    // };


    // DETAIL 
    // $scope.detailStudent = function (event, index) {
    //     event.preventDefault();
    //     let sv = $scope.danhSach[index];
    //     $scope.from_sinhVien.id = sv.id;
    //     $scope.from_sinhVien.name = sv.name;
    //     $scope.from_sinhVien.age = sv.age;
    //     $scope.from_sinhVien.gender = sv.gender;
    //     $scope.from_sinhVien.address = sv.address;
    // };


    //ADD 
    // $scope.addStudent = function (event) {
    //     event.preventDefault();
    //     $http.post(sinhVienAPI, $scope.from_sinhVien).then(function (response) {
    //         if (response.status === 201) {
    //             $scope.danhSach.push($scope.from_sinhVien);
    //             alert("Thêm sinh viên thành công !");
    //         }
    //     });
    // };
    // // Hàm console để check :">
    // $scope.check = function () {
    //     console.log($scope.from_sinhVien.gender);
    // };



};

