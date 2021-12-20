'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const MyPlugin = ({
  onClick
}) => /*#__PURE__*/React.createElement("button", {
  onClick: onClick
}, "Fetch");

var index = (api => {

  api.events().on('deactivated', () => api.store().persist());
  api.launch().render( /*#__PURE__*/React.createElement(MyPlugin, {
    onClick: fetch
  }));
});

exports["default"] = index;
