import { getFilteredItemsCount } from '../selectors/selectors';

class HeaderController {
  constructor($ngRedux, $scope, FilterActions) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, FilterActions)(this);
    $scope.$on('$destroy', unsubscribe);
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      currentFilter: state.currentFilter,
      count: getFilteredItemsCount(state)
    };
  }
}

export const header = {
  restrict: 'E',
  controller: HeaderController,
  template: require('./header.html')
}

