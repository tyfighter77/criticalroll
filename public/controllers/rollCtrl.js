angular.module('criticalApp')
    .controller('rollCtrl', function($scope, close, type) {

        $scope.close = close;

        $scope.type = type;

    });
