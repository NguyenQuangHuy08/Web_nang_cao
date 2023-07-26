window.dongVatAPI = function ($scope, $http) {

    $scope.danhSach = [];
    $scope.formDongVat = {

        id: "",
        ma: "",
        cannang: "",
        chieucao: "",

    }

    //tạo list dongavt

    $http.get(sinhVienAPI).then(function (response) {
        $scope.danhSach = response.data;
    });


    //deatil

    $scope.detailDongVat = function (event, index) {

        event.preventDefault();

        let dv = $scope.danhSach[index];

        $scope.formDongVat.ma = dv.ma;
        $scope.formDongVat.id = dv.id;
        $scope.formDongVat.cannang = dv.cannang;
        $scope.formDongVat.chieucao = dv.chieucao;


    }




}
