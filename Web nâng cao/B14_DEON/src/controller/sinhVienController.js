window.sVienCtrl = function ($scope, $http) {
    // De giao tiep BE, FE dung phuong thuc HTTP de giao tiep
    // Su dung cac method (HTTP method): GET, POST, PUT, DELETE,...
    // CRUD : CREATE, READ, UPDATE, DELETE

    // HTTP status code : 200,201,400,401,404,403,500...
    // request: Nhung gia tri tu client => server (FE => BE)
    // => Giong cai tham so truyen vao cua 1 function
    // response : Ket qua tra ve tu phia server => client(BE => FE)
    // => Ket qua tra ve cua 1 function
    // GET : Hien thi du lieu <=> READ <=> SELECT
    $scope.danhSach = [];
    $scope.from_sinhVien = {

        id: "",
        ten: "",
        maSV: "",
        cannang: "",
        loai: "",
        gioitinh: true,
        chuyennganh: "",
        sothich: "",


    };

    //list sinh viên
    $http.get(sinhVienAPI).then(function (response) {
        // if (response.status === 200) {
        //   $scope.danhSachThucVatHienThi = response.data;
        // }
        // console.log(response);

        if (response.statusText === "OK") {

            $scope.danhSach = response.data;

        }
    });


    // DELETE : XÓA

    $scope.removeStudent = function (event, index) {
        event.preventDefault();
        let sv = $scope.danhSach[index];
        let api = sinhVienAPI + "/" + sv.id;
        $http.delete(api).then(function () {
            $scope.danhSach.splice(index, 1);
            alert("Xóa sinh viên thành công !");
        });
    };


    // DETAIL 
    $scope.detailStudent = function (event, index) {
        event.preventDefault();
        let sv = $scope.danhSach[index];
        $scope.from_sinhVien.id = sv.id;
        $scope.from_sinhVien.ten = sv.ten;
        $scope.from_sinhVien.maSV = sv.maSV;
        $scope.from_sinhVien.cannang = sv.cannang;
        $scope.from_sinhVien.chuyennganh = sv.chuyennganh;
        $scope.from_sinhVien.gioitinh = sv.gioitinh;
        $scope.from_sinhVien.loai = sv.loai;
        $scope.from_sinhVien.sothich = sv.sothich;

    };


    //ADD 
    $scope.addStudent = function (event) {
        event.preventDefault();
        $http.post(sinhVienAPI, $scope.from_sinhVien).then(function (response) {
            if (response.status === 201) {
                $scope.danhSach.push($scope.from_sinhVien);
                alert("Thêm sinh viên thành công !");
            }
        });
    };
    // Hàm console để check :">
    $scope.check = function () {
        console.log($scope.from_sinhVien.gender);
    };



};