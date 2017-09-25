define('ember-bootstrap-nav-link/components/nav-link-to', ['exports', 'ember', 'ember-bootstrap-nav-link/templates/components/nav-link-to'], function (exports, _ember, _emberBootstrapNavLinkTemplatesComponentsNavLinkTo) {
  var LinkComponent = _ember['default'].LinkComponent;
  var computed = _ember['default'].computed;
  exports['default'] = LinkComponent.extend({
    tagName: 'li',
    layout: _emberBootstrapNavLinkTemplatesComponentsNavLinkTo['default'],
    attributeBindings: ['data-toggle', 'data-target'],

    hrefForA: computed('models', 'qualifiedRouteName', function computeLinkToComponentHref() {
      var qualifiedRouteName = this.get('qualifiedRouteName');
      var models = this.get('models');

      if (this.get('loading')) {
        return this.get('loadingHref');
      }

      var routing = this.get('_routing');
      var queryParams = this.get('queryParams.values');
      return routing.generateURL(qualifiedRouteName, models, queryParams);
    })
  });
});