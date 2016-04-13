angular.module('criticalApp', ['ui.router','angularModalService'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('hit', {
      url: '/hit',
      templateUrl: './views/hitTmpl.html',
      controller: 'hitCtrl'
    })
    .state('fumble', {
      url: '/fumble',
      templateUrl: './views/fumbleTmpl.html',
      controller: 'hitCtrl'
    });
    $urlRouterProvider.otherwise('/');
  });
