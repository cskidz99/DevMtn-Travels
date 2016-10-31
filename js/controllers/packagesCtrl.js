angular.module('devmtnTravel').controller('packagesCtrl',function($scope,mainSrv){
  $scope.packageList = mainSrv.travelInfo;
})
