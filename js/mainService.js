angular.module('app1').service('service', function($http){

  var baseUrl = '/api/movies'
   var baseUrl2 = '/api/m/'

      this.getPets = function() {
        return $http( {
            method: "GET",
            url: baseUrl
            }).then(function(response){
              return response.data;
        });
      }
      this.getDetails = function(id) {
        return $http( {
            method: "GET",
            url: baseUrl2 + id
            }).then(function(response){
              return response.data;
        });
      }

      // this.post = function(data1) {
      //   console.log(data1);
      //   return $http({
      //       method: 'POST',
      //       url: 'http://127.0.0.1:8080/orders',
      //       data: {obj: data1}
      //       }).then(function(response){
      //         return response.data;
      //   });
      //
      // }
})
