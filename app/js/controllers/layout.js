var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', function($scope, $http) {
    $scope.hello = "Hi";
    $http.get('http://robot-robot-api.herokuapp.com/posts')
      .success(function(data) {
        $scope.posts = data;
      });

  $scope.tags =
    [
      { "id": "1a", "name": "2cool4school" },
      { "id": "2b", "name": "kittycat" },
      { "id": "doop5", "name": "everything is awesome" }
    ];

  $scope.getTagName = function(id) {
    ret = "";
    // loops through all of the tags in $scope.tags
    for (i = 0; i < $scope.tags.length; i++){
      // checks to see if the param we passed is equal to the tag id
      if(id == $scope.tags[i].id) {
        ret = $scope.tags[i].name;
      }
    }
    return ret;
  };

  $scope.newPost = {"title": "", "content": "", "tag_ids": []};

  $scope.submitNewPost = function() {
    $scope.posts.push($scope.newPost);
  };

}]);
