var i = 1;
 var j = 0;
var news= angular.module('news',[]);
news.controller('labController', [
    '$scope', '$http','$rootScope',
    function ($scope, $http, $rootScope) {
      $scope.model={};
      $scope.movies = [];
      $scope.showDetails=showDetails;
      $scope.next=next;
      $scope.previous = previous;
       $scope.showMe = false;

		var url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page=1'
		//var url = 'https://api.themoviedb.org/3/movie/popular?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page=1';
          $http.get(url)
          .then(function(success){
          		$scope.movies = success.data.results;
          		$scope.show = false;          	
          		console.log(success.data.results);
          },function(error){
          		console.log(error);
          		$scope.show = false;
          });
    	function showDetails(id) {
        // body...
        
        var url = 'https://api.themoviedb.org/3/tv/'+id+'?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page=1'
        $http.get(url)
        .then(function (response) {
        $scope.detail = response.data;
        console.log(response.data);
        $scope.showMe = !$scope.showMe;
        }, function (response) {
            $scope.model.detail = { error: true, message: 'Error: ' + response.data.message };
          });


      }
      $scope.myFunc = function() {
        $scope.showMe = false;
    }
    function next() {
      // body...
      $scope.incre = ++i;
      
      j = $scope.incre;
      var url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page='+$scope.incre;
    
          $http.get(url)
          .then(function(success){
              $scope.movies = success.data.results;
              $scope.show = false;            
              console.log(success.data.results);
          },function(error){
              console.log(error);
              $scope.show = false;
          });
    }

    function previous() {
      // body...
      $scope.dec = --j;
      i = $scope.dec;
      var url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page='+$scope.dec;
    
          $http.get(url)
          .then(function(success){
              $scope.movies = success.data.results;
              $scope.show = false;            
              console.log(success.data.results);
          },function(error){
              console.log(error);
              $scope.show = false;
          });

    }

         
      
}]);

