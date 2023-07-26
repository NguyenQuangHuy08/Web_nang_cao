// danh sách list woman 1
window.pagesCtrl = function ($scope, $http) {

    $scope.danhSachPages = [];
    $scope.pages = {

        id: "",
        name: "",
        price: "",
        image: "",


    };

    //list woman 1
    $http.get(pagesAPI).then(function (response) {


        if (response.statusText === "OK") {

            $scope.danhSachPages = response.data;

        }
    });

    //detail sản phẩm

    $scope.detailSanPham = function (event, index) {

        event.preventDefault();
        let sanpham = $scope.danhSachPages[index];

        $scope.pages.id = sanpham.id;
        $scope.pages.name = sanpham.name;
        $scope.pages.price = sanpham.price;

    };


    //remove sản phẩm

    $scope.removeSanPham = function (event, index) {
        event.preventDefault();
        let sp = $scope.danhSachPages[index];
        let api = pagesAPI + "/" + sp.id;
        $http.delete(api).then(function () {
            $scope.danhSachPages.splice(index, 1);
            alert("Xóa sản phẩm thành công !");
        });
    };

    //add sản phẩm

    $scope.addSanPham = function (event, index) {

        event.preventDefault();
        $http.post(pagesAPI, $scope.pages).then(function () {

            if (response.status === 201) {

                $scope.danhSachPages.push($scope.pages);
                alert("Thêm sản phẩm !");

            };

        })



    };






};

