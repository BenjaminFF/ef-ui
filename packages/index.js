import Button from './button/index.js';
import Col from './col/index'
import Row from './row/index'

const components = [
  Button,
  Col,
  Row
];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
};
