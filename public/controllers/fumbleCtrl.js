angular.module('criticalApp')
    .controller('fumbleCtrl', function($scope, $state, ModalService, $stateParams, mainService) {

        $scope.type = $stateParams.type;

        mainService.getRoll($scope.type)
            .then(function(response) {
                $scope.result = response;
            });

        $scope.reload = function(){
          mainService.getRoll($scope.type)
              .then(function(response) {
                  $scope.result = response;
              });
        };

        $scope.goHome = function(){
          $state.go('home');
        };

        });
