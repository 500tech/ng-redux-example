//import 'babel-core/polyfill';
import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/reducers';
import redditActions from './actions/reddit.actions';
import filterActions from './actions/filter.actions';
import { app, pureApp } from './containers/app';
import { header } from './containers/header';
import { picker } from './components/picker';
import { posts } from './components/posts';

angular.module('async', [ngRedux])
  .config(($ngReduxProvider) => {
    // chrome extension:
    const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f;

    $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()], [devTools]);
  })
  .service('RedditActions', redditActions)
  .service('FilterActions', filterActions)
  .component('pureApp', pureApp)
  .component('ngrAsync', app)
  .component('ngrHeader', header)
  .component('ngrPicker', picker)
  .component('ngrPosts', posts);
