var news= angular.module('news',[]);
news.controller('labController', [
    '$scope', '$http','$rootScope',
    function ($scope, $http, $rootScope) {
      $scope.model={};
      $scope.movies = [];

    var url = 'https://api.themoviedb.org/3/movie/latest?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page=1'
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
      function getId(id) {
        // body...
        $rootScope.idd = id;

      }

         
      
}]);
//var api= angular.module('myApp',[]);
news.controller('detailController',['$scope','$http',function ($scope,$http) {

    var url = 'https://api.themoviedb.org/3/movie/157336?api_key=ea12c869f716552bef3493abf72c3617&language=en-US&page=1&append_to_response=videos,images'
    $http.get(url)
    .then(function (response) {
        $scope.detail = response.data;
        console.log(response.data);
        }, function (response) {
            $scope.model.detail = { error: true, message: 'Error: ' + response.data.message };
    });
          

}]);

