'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minovateApp
 */
  angular.module('app').controller('MainCtrl', function ($scope, $http) {

    $scope.main = {
      title: 'Food Review',
      settings: {
        navbarHeaderColor: 'scheme-cyan',
        sidebarColor: 'scheme-cyan',
        brandingColor: 'scheme-cyan',
        activeColor: 'default-scheme-color',
        headerFixed: true,
        asideFixed: true,
        rightbarShow: false
      }
    };

    $scope.ajaxFaker = function(){
      $scope.data=[];
      var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&delay=5&callback=JSON_CALLBACK';

      $http.jsonp(url).success(function(data){
        $scope.data=data;
        angular.element('.tile.refreshing').removeClass('refreshing');
      });
    };
  });
