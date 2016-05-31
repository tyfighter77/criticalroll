angular.module('criticalApp')
    .controller('homeCtrl', function($scope, ModalService) {

      $scope.openRollModal = function(type) {
        ModalService.showModal({
          templateUrl: './modals/rollTmpl.html',
          controller: 'rollCtrl',
          inputs: {
            type: type
          }
        }).then(function(modal) {
          modal.close.then(function() {
          });
        });
      };

    });
