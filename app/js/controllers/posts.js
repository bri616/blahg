var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', function($scope, $http) {
  $scope.name = "posts controller yayayay!";
}]);

postsControllerModule.controller('newPostController', ['$scope', '$http', function($scope, $http) {
  $scope.newName = "new post controller WOOP WOOP";
  $scope.submitNewPost = function(){
    $http.post('http://robot-robot-api.herokuapp.com/posts',
    {
      post: {
        title: $scope.newPost.title,
        content: $scope.newPost.content
      }
    });
  };
}]);

postsControllerModule.controller('postController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
  $scope.postName = "this is the post view";
  $scope.id = $stateParams.id;

  $scope.getPostContent = function(id) {
    ret = "";
    // loops through all of the posts in $scope.
    for (i = 0; i < $scope.tags.length; i++){
      // checks to see if the param we passed is equal to the post id
      if(id == $scope.tags[i].id) {
        ret = $scope.tags[i].name;
      }
    }
    return ret;
  };
}]);
