class PostsController {
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
