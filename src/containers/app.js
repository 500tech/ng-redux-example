import { getSelectedRedditObject, getFilteredItems, getIsFetching } from '../selectors/selectors';

class PureAppController {
  constructor($scope) {
    this.options = ['angularjs', 'frontend'];
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  $onChanges(changes) {
    const { selectedReddit } = changes;
    if (selectedReddit && selectedReddit.currentValue !== selectedReddit.previousValue) {
      this.fetchPostsIfNeeded(selectedReddit.currentValue);
    }
  }

  handleChange(nextReddit) {
    this.selectReddit(nextReddit);
  }

  handleRefreshClick() {
    this.invalidateReddit(this.selectedReddit);
    this.fetchPostsIfNeeded(this.selectedReddit);
  }
}

export const pureApp = {
  controllerAs: 'app',
  controller: PureAppController,
  template: require('./app.html'),
  bindings: {
    // state:
    selectedReddit: '<',
    items: '<',
    isFetching: '<',
    lastUpdated: '<',
    // actions:
    selectReddit: '<',
    invalidateReddit: '<',
    fetchPostsIfNeeded: '<'
  }
};


class AppController {

  constructor($ngRedux, $scope, RedditActions) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, RedditActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      selectedReddit: state.selectedReddit,
      items: getFilteredItems(state),
      isFetching: getIsFetching(state),
      lastUpdated: state.lastUpdated
    };
  }
}

const app = {
  restrict: 'E',
  controller: AppController,
  template: `<pure-app
    items="$ctrl.items"
    selected-reddit="$ctrl.selectedReddit"
    is-fetching="$ctrl.isFetching"
    last-updated="$ctrl.lastUpdated"
    select-reddit="$ctrl.selectReddit"
    invalidate-reddit="$ctrl.invalidateReddit"
    fetch-posts-if-needed="$ctrl.fetchPostsIfNeeded">
  </pure-app>`,
  bindings: {}
}

export { app }