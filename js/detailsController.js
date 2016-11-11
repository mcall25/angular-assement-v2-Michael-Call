angular.module('app1').controller('detailsController', function($scope, service, $stateParams){

    service.getDetails($stateParams.id)
      .then(function(res){
        $scope.details = res
        console.log($scope.details);
      })
})
