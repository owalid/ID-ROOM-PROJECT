// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services'])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  
  
  ionic.Platform.setPlatform("android");

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])


.directive('fesse', function(){

    return{
            restrict : 'A',
            replace:true,
            transclude:true,
            scope: {mot1 : '='},
            template :"fesse",
            link: function($scope){
             
                  $scope.generate = function () {

                              var obj = ['Snake',
                        'Tetris', 
                        'Stocks',
                        'Bloc-notes',
                        'Dictaphone',
                        'Galeries',
                        'Chat',
                        'Météo',
                        'Horloge',
                        'Restaurants',
                        'Films',
                        'Transports',
                        'Gastronomie',
                        'Sport',
                        'Télévision',
                        'Musique',
                        'Art',
                        'Littérature ',
                        'Espace',
                        'Science',
                        'Langues',
                        'Culture',
                        'Réseaux',
                        'Base de données',
                        'Interfaces',
                        'E-Commerce',
                        'Publicité',
                        'Partage',
                        'Méditation',
                        'Planning',
                        'Architecture',
                        'Design',
                        'Finance',
                        'Localisation',
                        'Photographie',
                        'Dance',
                        'Ephémère',
                        'Nature'];

                      $scope.mot1 = obj[Math.floor(Math.random() * obj.length)];

         };                 
       }
     };
  });



/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.

.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});
*/