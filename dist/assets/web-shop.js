"use strict";



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
			return [{
				id: 1,
				name: 'First Category'
			}, {
				id: 2,
				name: 'Second Category'
			}];
		},


		// recieve action from Add and Delete buttons on categories route
		actions: {
			addNewCategory: function addNewCategory(id, name) {
				this.controller.get('model').pushObject({ id: id, name: name });
			},
			deleteCategory: function deleteCategory(category) {
				this.controller.get('model').removeObject(category);
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
  exports.default = Ember.HTMLBars.template({ "id": "fZAcGtfr", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"Admin Page\"],[8],[0,\"\\n\\n\"],[4,\"link-to\",[\"admin.categories\"],null,{\"statements\":[[0,\"Categories\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[6,\"hr\"],[7],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/admin.hbs" } });
});
define("web-shop/templates/admin/categories", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hNxOsM+L", "block": "{\"symbols\":[\"category\"],\"statements\":[[6,\"h1\"],[7],[0,\"Categories Admin/Page\"],[8],[0,\"\\n\\n\"],[6,\"form\"],[7],[0,\"\\n\\t\"],[6,\"label\"],[7],[0,\"ID:\"],[8],[0,\"\\n\\t\\t\"],[1,[25,\"input\",null,[[\"value\"],[[19,0,[\"newCategoryId\"]]]]],false],[0,\"\\n\\t\"],[6,\"label\"],[7],[0,\"NAME:\"],[8],[0,\"\\n\\t\\t\"],[1,[25,\"input\",null,[[\"value\"],[[19,0,[\"newCategoryName\"]]]]],false],[0,\"\\n\\t\"],[6,\"button\"],[9,\"type\",\"submit\"],[3,\"action\",[[19,0,[]],\"addNewCategory\",[19,0,[\"newCategoryId\"]],[19,0,[\"newCategoryName\"]]]],[7],[0,\"Add\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[6,\"li\"],[7],[0,\"\\n\\t\\tID: \"],[1,[19,1,[\"id\"]],false],[0,\", NAME: \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\\t\\t\"],[6,\"button\"],[3,\"action\",[[19,0,[]],\"deleteCategory\",[19,1,[]]]],[7],[0,\"Delete\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\\n\"],[0,\"Category Counter: \"],[1,[20,[\"model\",\"length\"]],false]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/admin/categories.hbs" } });
});
define("web-shop/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "A4k324Xq", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null],[0,\" | \"],[4,\"link-to\",[\"admin\"],null,{\"statements\":[[0,\"Admin\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[6,\"hr\"],[7],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/application.hbs" } });
});
define("web-shop/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0AoboZ4N", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"Home Page\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "web-shop/templates/index.hbs" } });
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
