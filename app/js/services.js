var servicesModule = angular.module('servicesModule', []);

servicesModule.factory('apiService', ['$http', function($http){
  var url='http://robot-robot-api.herokuapp.com';
  return{
    get: function(page) {
      return $http.get(url + page);
    },
    postPost: function(post) {
      $http.post('http://robot-robot-api.herokuapp.com/posts',
    {
      post: {
        title: post.title,
        content: post.content
      }
    }
  );}
}
}]);
