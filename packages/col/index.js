import EFCol from './src/col';

/* istanbul ignore next */
EFCol.install = function(Vue) {
  Vue.component(EFCol.name, EFCol);
};

export default EFCol;
