angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('fesseCtrl', ['$scope', '$stateParams', function($scope, $cordovaSocialSharing) {
    console.warn('fesse initialized!');

    
    //fonction random   
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

                         var obj2 =[
							    ];

                      $scope.mot1 = obj[Math.floor(Math.random() * obj.length)];
                      $scope.mot2 = obj2[Math.floor(Math.random() * obj2.length)];
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

    	//function add
    	$scope.add = function(){

    		if ($scope.text) {

          	obj2.push(this.text);
          	$scope.text = '';
        }
    		
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
									  'Mathématiques'	,
									  'Gestion',
									  'Paris',
									  'Définitions',
									  'Histoire',
									  'Recherche',
									  'Histoire',
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
									  'Santé'*/