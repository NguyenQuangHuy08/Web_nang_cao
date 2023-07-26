window.DongVatCtrl = function($scope,$http){
 
    $scope.danhSach = []


    $http.get(dongVatAPI).then(function(response){
        $scope.danhSach = response.data;
    });



}