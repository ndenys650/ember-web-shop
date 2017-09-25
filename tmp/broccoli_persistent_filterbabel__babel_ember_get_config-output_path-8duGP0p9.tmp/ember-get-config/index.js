define('ember-get-config/index', ['exports', 'web-shop/config/environment'], function (exports, _webShopConfigEnvironment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _webShopConfigEnvironment['default'];
    }
  });
});