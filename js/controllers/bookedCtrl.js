angular.module('devmtnTravel').controller('bookedCtrl',function($scope,mainSrv,$stateParams){

  $scope.setCity = function(){
    for(var i=0; i < mainSrv.travelInfo.length; i++){
      if(mainSrv.travelInfo[i].id == $stateParams.id){
        $scope.bookedCity = mainSrv.travelInfo[i];
      }
    }
  }

  $scope.setCity();
})
