'use strict';

angular.module('initApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sections = [
	    {name:'About', hash:'about'},
	    {name:'Skills', hash:'skills'},
	    {name:'Vision', hash:'vision'},
	    {name:'Tweets', hash:'tweets'},
	    {name:'Contact', hash:'contact'}
    ];

	/**
	@todo Use a scroll spy https://github.com/durated/angular-scroll.
	**/
	$scope.goTo = function(section){
		$location.hash(section.hash);	    
	    //$anchorScroll(); 	
        $('html,body').animate({
          scrollTop: $('#' + section.hash).offset().top - 50
        }, 500);
	};
      
  });