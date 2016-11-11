angular.module('app1').service('service', function($http){

  var baseUrl = 'http://practiceapi.devmounta.in/pets'
   var baseUrl2 = "http://practiceapi.devmounta.in/pets/"

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
})
