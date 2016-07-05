var SMapp = angular.module("mainApp", ['ngRoute']);


SMapp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'ReportController'
    })
    .when('/report-list', {
      templateUrl: 'consumerviews/report-list.html',
      controller: 'ReportController'
    })
    .when('/MyCouch', {
      templateUrl: 'consumerviews/couchView.html',
      controller: 'ReportController'
    });
});
