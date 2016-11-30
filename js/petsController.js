angular.module('app1').controller('petsController', function($scope, service){

    service.getPets()
      .then(function(res){
        $scope.pets = res
        // console.log($scope.pets);
        return $scope.pets

      })
})
