var SMapp = angular.module("mainApp", ['ngRoute']);


SMapp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'ReportController'
    })
    .when('/report-list', {
      templateUrl: 'templates/report-list.html',
      controller: 'ReportController'
    })

    .when('/showreport', {
      templateUrl: 'templates/show-report.html',
      controller: 'ReportbyDayController'
      })

    .when('/showreport:reportid', {
      templateUrl: 'templates/show-report.html',
      controller: 'ReportbyDayController'
      })

      .when('/addreport', {
        templateUrl: 'templates/add-report.html',
        controller: 'ReportController'
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
        $scope.whichReport = $routeParams.reportid;
        var thisone = $routeParams.reportid


        console.log(data)
        console.log($scope.whichReport + " is the reportid");
     });
   }]
);

SMapp.controller('AdminController', function($scope, $http){

  $('.saveReport').click(function (e) {
    console.log("clicked");

    $scope.newReport = ({

      "ShowName" : $('input[name="saveShowName"]').val(),
      "RehearsalDate": $('input[name="saveRehearsalDate"]').val(),
      "SM": $('input[name="saveSM"]').val(),
      "Director": $('input[name="saveDirector"]').val(),
      "Props": $('input[name="saveProps"]').val(),
      "Costumes": $('input[name="saveCostumes"]').val(),
      "Lights": $('input[name="saveLights"]').val(),
      "Sound": $('input[name="saveSound"]').val(),
      "RunTime": $('input[name="saveRunTime"]').val(),
        "General": $('input[name="saveGeneral"]').val(),
    });
    $http.post("http://localhost:3007/reports", $scope.newReport).success(function(data) {
    console.log(data);
  });
});
});
