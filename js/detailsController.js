angular.module('app1').controller('detailsController', function($scope, service, $stateParams){

    // service.getDetails($stateParams.id)
    //   .then(function(res){
    //     $scope.details = res;
    //     console.log($scope.details);
    //   })
      $scope.detail = function() {
        service.getDetails($stateParams.id)
        .then(function(res){
          $scope.details = res;
          console.log($scope.details);
        })
      }
      $scope.detail()


      // $scope.post = function(data1) {
      //   // console.log(data1);
      //     service.post(data1)
      //     .then(function(response){
      //       return response;
      //     })
      // };

      // $scope.post = function(data1, data2, data3, data4, data5) {
      //   console.log(data1);
      //   console.log(data2);
      //   console.log(data3);
      //   console.log(data4);
      //   console.log(data5);
      // }

})
