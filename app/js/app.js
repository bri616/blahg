var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'homeControllerModule',
  'postsControllerModule',
  'servicesModule',
  'ngAria',
  'ngMaterial'
]);

blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  })
  .state('posts', {
    url: '/posts',
    templateUrl: 'app/views/posts.html'
  })
  .state('posts.new', {
    url: '/new-post',
    views: {
      'new': {
        templateUrl: 'app/views/new.html'
      }
    }
  })
  .state('show', {
    url: '/post/:id',
    templateUrl: 'app/views/show.html'
  });
  $urlRouterProvider.otherwise('/');
});

blahgApp.directive('showAttrs', function() {
  return function(scope, el, attrs) {
    var pre = document.createElement('pre');
    el.after(pre);
    scope.$watch(function() {
      var attrs = {};
      Array.prototype.slice.call(el[0].attributes, 0).forEach(function(item) {
        if (item.name !== 'show-attrs') {
          attrs[item.name] = item.value;
        }
      });
      return attrs;
    }, function(newAttrs, oldAttrs) {
      pre.innerText = JSON.stringify(newAttrs, null, 2);
    }, true);
  }
});
