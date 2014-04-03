'use strict';

angular.module('initApp')
  .controller('MainCtrl', function ($scope,$rootScope,$location,scroller,$http) {
    

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sections = [
	    {name:'About', anchor:'#about'},
	    {name:'Skills', anchor:'#skills'},
	    {name:'Vision', anchor:'#vision'},
	    {name:'Tweets', anchor:'#tweets'},
	    {name:'Contact', anchor:'#contact'}
    ];

    $scope.techs = [
      {css:'angular', title:'AngularJs'},
      {css:'mongodb', title:'MongoDb'},
      {css:'git', title:'Git'},
      {css:'nodejs', title:'NodeJs'},
      {css:'phonegap', title:'Phonegap'}
    ];

    /**
    Reflect the section changes on the url.
    @todo get the $locationProvider HashPrefix.
    @todo Scroll to section on page load according to the hash.
    **/
    $rootScope.$on('duScrollspy:becameActive', function($event, $element){
      var ENV = {runtime:'blink'};
      if(ENV.runtime === 'firefox'){
        //Automaticly update location
        var hash = $element.prop('hash');
        if(hash) {
          var hashStr = '!' + hash.substr(1) ;
          //$location.hash(hashStr).replace();
          //$rootScope.$apply();
          history.replaceState(null, null, '#'+ hashStr );
          
        }
      }
    });
    $scope.scrollTo = function(hash) {
      scroller.scrollToElement(document.getElementById(hash), 30, 1500);
    };
    
    $scope.send = function(){

      var url = 'http://api.postmarkapp.com/email';
      var data = {'From': $scope.sender, 'To': 'schmitzdenis@gmail.com', 'Subject': 'codeapp contact', 'HtmlBody': $scope.text} ;
      var configObj = { headers : {'X-Postmark-Server-Token' : '2a479e67-d080-442b-9512-6451b8434689','Content-Type': 'application/json'} };

      $http.post(url , data, configObj).success(function(){
        console.log(arguments);
      }). error(function(){
        console.log(arguments);
      });

    };

    var init = function () {
      $scope.scrollTo( $location.hash() );
    };

    init();

  });