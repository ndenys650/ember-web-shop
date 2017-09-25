define('web-shop/router', ['exports', 'web-shop/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('admin', function () {
      this.route('categories');
      this.route('products');
    });
  });

  exports.default = Router;
});