angular.module('devmtnTravel').controller('locationsCtrl',function($scope,mainSrv){
  $scope.cityList = mainSrv.travelInfo;
})
