angular.module('app1').directive('pets', function(){
    return {
      restrict: 'AE',
      templateUrl: './views/pet-tmpl.html',
      scope: {
        vidgame: '=',
        getdeets: '&'

      }
    };
});
