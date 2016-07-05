var SMapp = angular.module("mainApp", ['ngRoute']);


SMapp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'templates/home.html',
      // controller: 'ReportController'
    })
    .when('/report-list', {
      templateUrl: 'templates/report-list.html',
      // controller: 'ReportController'
    })
    .when('/showreport:reportid', {
      templateUrl: 'templates/show-report.html',
      // controller: 'ReportController'
      })
      .otherwise({
        redirectTo: "/home"

    });
});

SMapp.controller('ReportController', function($scope, $http){
  var url = "http://localhost:3007/reports"

     $http.get(url).success( function(data) {
        $scope.reportList = data;
        console.log(data)
     });
});


SMapp.controller('ReportbyDayController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

  var url = "http://localhost:3007/reports"
     $http.get(url).success( function(data) {
        $scope.reportList = data;
        $scope.whichReport = $routeParams.reportID;

        console.log(data)
     });
   }]
);
