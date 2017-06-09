angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('fesseCtrl', ['$scope', '$stateParams','$ionicModal','$timeout', function($scope, $cordovaSocialSharing, $ionicModal,$timeout) {
    console.warn('fesse initialized!');

  
//\\\\\\\\\\\\modal\\\\\\\\\\\\//

    	/*\\\\\\\\modal start\\\\\\\*/
     $ionicModal.fromTemplateUrl('templates/modalstart.html', {  
		  	index: '1',
		       scope2: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.modal1 = modal;
		  });
		  
		$timeout(function(){
		    $scope.openModal(1);},
		    500);


    	/*\\\\\\\Modal add word\\\\\\\*/
	     $ionicModal.fromTemplateUrl('templates/modaladdmot.html', {
				 index: '2', 
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.modal2 = modal;
		  });
		  
		  $scope.createWord = function(u) { 		  
		  	$scope.obj2.push(u.firstName );
		    u.firstName = '';
		    $scope.modal2.hide();
		  };


  /*\\\\\\\\\\\\open and close modal1 and 2\\\\\\\\\\\\*/
   $scope.openModal = function(index) {
      if (index == 1) $scope.modal1.show();
      else if(index == 2) $scope.modal2.show();
    };

    $scope.closeModal = function(index) {
      if (index == 1) $scope.modal1.hide();
      else if(index == 2) $scope.modal2.hide();
    };

  		/*\\\\\\\\\\\\word 1\\\\\\\\\\\\*/
 						$scope.obj = ['Snake',
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

		/*\\\\\\\\\\\\word 2\\\\\\\\\\\\*/
                         $scope.obj2 =[
                         'Théorie',
									  'Séries',
									  'Mode',
									  'Déplacement',
									  'Tourisme',
									  'Simulateur',
									  'Bon plan',
									  'Cartographie',
									  'Transferts',
									  'Technologie',
									  'Calendrier',
									  'Mathématiques',
									  'Gestion',
									  'Paris',
									  'Définitions',
									  'Histoire',
									  'Recherche',
									  'Article',
									  'Sécurité',
									  'Objet',
									  'Réalité',
									  'Virtuel',
									  'Imaginaire',
									  'Automobiles',
									  'Spiritualité', 
									  'Surnaturel',
									  'Soins',
									  'Santé'
									  ];

//\\\\\\\\\\\\function\\\\\\\\\\\\//	


    	//\\\\\\\\\\\\function random\\\\\\\\\\\\//   
  $scope.generate = function () {      
                      $scope.mot1 = $scope.obj2[Math.floor(Math.random() * $scope.obj2.length)];
                      $scope.mot2 = $scope.obj[Math.floor(Math.random() * $scope.obj.length)];
         };                 
 	 	
         //\\\\\\\\\\\\function share\\\\\\\\\\\\//
  $scope.share = function(){

    		var options ={

    			message:  "Regarde mon début d'idée de projet : " + $scope.mot1 + " " + $scope.mot2,
 				subject : "projet idée"
    		}

    	window.plugins.socialsharing.shareWithOptions(
    		options,
    		function(){console.log("Partage OK")},
    		function(err){console.log("Partage KO :", err)
    		});    	
    	};
    
}]);


 
