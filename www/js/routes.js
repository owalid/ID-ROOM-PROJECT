angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider.state('historique', {
    url: '/historique',
    templateUrl: 'templates/historique.html',
    
  })

  .state('about', {
    url: '/about',
      templateUrl: 'templates/about.html',
    
  })

  .state('addmot', {
    url:'/addmot',
      templateUrl: 'templates/addMot.html',
      
    })


 
 .state('fesse', {
    url: '/fesse',
    templateUrl: 'templates/fesse.html',
    controller: 'fesseCtrl'
  });

$urlRouterProvider.otherwise('fesse');



});