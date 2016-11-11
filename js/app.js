angular.module('app1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeController'
      })
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html',
        controller: 'aboutController'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html',
        controller: 'blogController'
      })
      .state('details', {
        url: '/details/:id',
        templateUrl: './views/pet-bio.html',
        controller: 'detailsController'
      })
      .state('pets', {
        url: '/pets',
        templateUrl: './views/pets.html',
        controller: 'petsController'
      })
  })
