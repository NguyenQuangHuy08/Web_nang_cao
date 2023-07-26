window.detailsAoctrl = function ($scope, $rootScope, $routeParams) {
  $scope.aoindex = $rootScope.listAo.filter((ao) => {
    return ao.id === $routeParams.id;
  })[0];
};
