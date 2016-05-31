angular.module('criticalApp')
    .controller('hitCtrl', function($scope, ModalService, $stateParams, mainService) {

        $scope.type = $stateParams.type;

        mainService.getRoll($scope.type)
            .then(function(response) {
                $scope.result = response;
            });

    });
