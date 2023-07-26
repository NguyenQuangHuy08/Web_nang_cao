// xây dựng biến trả về gia trị theo id

window.hoaQuaDetailsCtrl = function ($scope, $routeParams, $rootScope) {
    $scope.hQua = $rootScope.listHoaQua.filter((item) => {
      return item.id === $routeParams.id;
    })[0];
  };
  