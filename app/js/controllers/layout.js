var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', 'apiService', function($scope, $http, apiService) {
    $scope.hello = "Hi";
    $scope.tags = [];
    $scope.posts = [];
    apiService.get('/posts')
      .success(function(data) {
        $scope.posts = data;
      });

    apiService.get('/tags')
      .success(function(data){
        $scope.tags = data;
      });

  $scope.getTagName = function(id) {
    tagName = "";
    // loops through all of the tags in $scope.tags
    for (i = 0; i < $scope.tags.length; i++){
      // checks to see if the param we passed is equal to the tag id
      if(id == $scope.tags[i].id) {
        tagName = $scope.tags[i].name;
      }
    }
    return tagName;
  };

  $scope.newPost = {"title": "", "content": "", "tag_ids": []};

  $scope.submitNewPost = function() {
    $scope.posts.push($scope.newPost);
  };

  $scope.ToggleId = function(id) {
    var i = $scope.newPost.tag_ids.indexOf(id);
    // if id is not in the array
    if(i == -1){
      $scope.newPost.tag_ids.push(id);
    } else {
      // remove 1 item from the array at the index value i
      $scope.newPost.tag_ids.splice(i, 1);
    }
    console.log($scope)
  };

}]);
