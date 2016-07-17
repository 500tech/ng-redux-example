class PickerController {
}

const picker = {
  controller: PickerController,
  template: require('./picker.html'),
  bindings: {
    options: '<',
    value: '<',
    onChange: '='
  }
};

export { picker };
