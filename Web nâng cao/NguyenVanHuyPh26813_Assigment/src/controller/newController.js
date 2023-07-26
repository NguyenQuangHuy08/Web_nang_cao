// danh sách list woman 1
window.newCtrol = function ($scope, $http) {

    $scope.danhSachNew = [];
    $scope.New = {

        id: "",
        name: "",
        price: "",
        image: "",


    };

    //list woman 1
    $http.get(newAPI).then(function (response) {


        if (response.statusText === "OK") {

            $scope.danhSachNew = response.data;

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

