'use strict';

angular.module('initApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'duScroll'
])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider
    .html5Mode(true)
    .hashPrefix('!');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    // use the HTML5 History API

  });
