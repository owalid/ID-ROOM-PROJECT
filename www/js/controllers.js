angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('fesseCtrl', ['$scope', '$stateParams','$ionicModal', function($scope, $cordovaSocialSharing, $ionicModal) {
    console.warn('fesse initialized!');

	     $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.createContact = function(u) {        
    $scope.obj2.push(u.firstName );
    u.firstName = '';
    $scope.modal.hide();
  };

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

                         $scope.obj2 =['Théorie',
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
									  'Santé'];

						 

/*		    	function add
  $scope.add = function(){
    	
       if($scope.text){

       	$scope.obj2[$scope.obj2.length] = $scope.text;
       	 $scope.obj2.push($scope.text);
       	 $scope.text = '';
       	console.log($scope.obj2[0]);

       }
      obj3[obj3.length]=$scope.text;          	
       

    
    		
    };*/
    
    	//fonction random   
  $scope.generate = function () {
		
       
                      $scope.mot1 = $scope.obj2[Math.floor(Math.random() * $scope.obj2.length)];
                      $scope.mot2 = $scope.obj[Math.floor(Math.random() * $scope.obj.length)];
                      // $scope.mot3 = obj3[Math.floor(Math.random() * obj3.length)];

         };                 
 	
 	
         //fonction share
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


 
 
/*value obj2:'Théorie',
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
							    ];*/