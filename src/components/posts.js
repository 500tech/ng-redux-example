class PostsController {
  constructor($scope) {
    $scope.$watch(() => {
      console.count('digest posts');
    }, angular.noop);
  }
  $onChanges(changes) {
    console.count('changes');
  }
}

const posts = {
  controller: PostsController,
  template: require('./posts.html'),
  bindings: {
    posts: '<',
    test: '<'
  }
};

export { posts };