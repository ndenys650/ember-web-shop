"use strict";



define('web-shop/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.JSONAPIAdapter.extend({

		namespace: 'api'
	});
});
define('web-shop/app', ['exports', 'web-shop/resolver', 'ember-load-initializers', 'web-shop/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('web-shop/components/nav-link-to', ['exports', 'ember-bootstrap-nav-link/components/nav-link-to'], function (exports, _navLinkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _navLinkTo.default;
    }
  });
});
define('web-shop/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('web-shop/helpers/app-version', ['exports', 'web-shop/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('web-shop/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('web-shop/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('web-shop/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'web-shop/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('web-shop/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('web-shop/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('web-shop/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'web-shop/config/environment', 'web-shop/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = Ember.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('web-shop/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('web-shop/initializers/export-application-global', ['exports', 'web-shop/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('web-shop/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('web-shop/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('web-shop/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("web-shop/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('web-shop/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    this.timing = 300; // delay for each request, automatically set to 0 during testing

    this.namespace = '/api';

    this.resource('categories');
    this.resource('products');

    // this.post('/categories', 'category', 500);
    // this.get('/categories', 'category', 500);
    // this.del('/categories');

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
  };
});
define('web-shop/mirage/factories/category', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberCliMirage.Factory.extend({

		name: _emberCliMirage.faker.commerce.department

	});
});
define('web-shop/mirage/models/category', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({});
});
define('web-shop/mirage/scenarios/default', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    server.createList('category', 10);
  };
});
define('web-shop/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('web-shop/models/category', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({

    name: _emberData.default.attr('string'),

    isEditing: false

  });
});
define('web-shop/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
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
define('web-shop/routes/admin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('web-shop/routes/admin/categories', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model() {
			// return data from database
			return this.store.findAll('category');
		},
		setupController: function setupController(controller, model) {
			this._super(controller, model);

			controller.set('newCategory', this.store.createRecord('category'));
		},


		// recieve action from Add and Delete buttons on categories route
		actions: {
			addNewCategory: function addNewCategory(newCategory) {
				var _this = this;

				newCategory.save().then(function (category) {
					console.info('Response:', category);
					_this.controller.set('newCategory', _this.store.createRecord('category'));
				}, function (error) {
					console.error('Error from server:', error);
				});
			},
			editCategory: function editCategory(category) {
				category.set('isEditing', true);
			},
			updateCategory: function updateCategory(category) {
				category.save().then(function (category) {
					return category.set('isEditing', false);
				});
			},
			deleteCategory: function deleteCategory(category) {
				category.destroyRecord();
			}
		}
	});
});
define('web-shop/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("web-shop/templates/admin", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w4J1Ogf4", "block": "{\"symbols\":[],\"statements\":[[6,\"ul\"],[9,\"class\",\"nav nav-pills\"],[7],[0,\"\\n  \"],[4,\"nav-link-to\",[\"admin.categories\"],null,{\"statements\":[[0,\"Categories\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"nav-link-to\",[\"admin.products\"],null,{\"statements\":[[0,\"Products\"]],\"parameters\":[]},null],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"hr\"],[7],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/admin.hbs" } });
});
define("web-shop/templates/admin/categories", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VdspanPc", "block": "{\"symbols\":[\"category\",\"error\"],\"statements\":[[6,\"h1\"],[7],[0,\"Admin - Categories\"],[8],[0,\"\\n\\n\"],[0,\"  \"],[6,\"div\"],[9,\"class\",\"well well-sm\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"form-inline\"],[3,\"action\",[[19,0,[]],\"addNewCategory\",[19,0,[\"newCategory\"]]],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"for\",\"new-category\"],[7],[0,\"New category:\"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"new-category\",\"Category name\",[19,0,[\"newCategory\",\"name\"]]]]],false],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-default\"],[7],[0,\"Add\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[19,0,[\"newCategory\",\"isError\"]]],null,{\"statements\":[[0,\"    Error!!\\n\"],[4,\"each\",[[19,0,[\"newCategory\",\"errors\"]]],null,{\"statements\":[[0,\"      \"],[1,[19,2,[]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n\\n\"],[6,\"table\"],[9,\"class\",\"table table-striped\"],[7],[0,\"\\n  \"],[6,\"caption\"],[7],[0,\"List of categories\"],[8],[0,\"\\n  \"],[6,\"thead\"],[7],[0,\"\\n  \"],[6,\"tr\"],[7],[0,\"\\n    \"],[6,\"th\"],[7],[0,\"#\"],[8],[0,\"\\n    \"],[6,\"th\"],[7],[0,\"Name\"],[8],[0,\"\\n    \"],[6,\"th\"],[7],[0,\"Actions\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[4,\"unless\",[[19,1,[\"isNew\"]]],null,{\"statements\":[[0,\"      \"],[6,\"tr\"],[7],[0,\"\\n        \"],[6,\"td\"],[7],[1,[19,1,[\"id\"]],false],[8],[0,\"\\n        \"],[6,\"td\"],[3,\"action\",[[19,0,[]],\"editCategory\",[19,1,[]]]],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"isEditing\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"input\",null,[[\"value\"],[[19,1,[\"name\"]]]]],false],[0,\"\\n            \"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"updateCategory\",[19,1,[]]]],[7],[0,\"Save\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"td\"],[7],[0,\"\\n          \"],[6,\"button\"],[9,\"class\",\"btn btn-xs btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteCategory\",[19,1,[]]]],[7],[0,\"Del\"],[8],[0,\"\\n          \"],[6,\"button\"],[9,\"class\",\"btn btn-xs btn-success\"],[3,\"action\",[[19,0,[]],\"editCategory\",[19,1,[]]]],[7],[0,\"Edit\"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[0,\"Number of categories: \"],[1,[20,[\"model\",\"length\"]],false]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/admin/categories.hbs" } });
});
define("web-shop/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/I1F74wY", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[9,\"class\",\"navbar navbar-inverse navbar-fixed-top\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"navbar-toggle collapsed\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#navbar-collapse\"],[9,\"aria-expanded\",\"false\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Toggle navigation\"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"WebShop\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"navbar-collapse\"],[7],[0,\"\\n\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav\"],[7],[0,\"\\n\\n        \"],[4,\"nav-link-to\",[\"index\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"nav-link-to\",[\"admin\"],null,{\"statements\":[[0,\"Admin\"]],\"parameters\":[]},null],[0,\"\\n\\n      \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/application.hbs" } });
});
define("web-shop/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0AoboZ4N", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"Home Page\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/index.hbs" } });
});
define('web-shop/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/category.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/category.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/category.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/category.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('web-shop/config/environment', ['ember'], function(Ember) {
  var prefix = 'web-shop';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("web-shop/app")["default"].create({"name":"web-shop","version":"0.0.0+1a251768"});
}
//# sourceMappingURL=web-shop.map
