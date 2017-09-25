define('web-shop/mirage/factories/category', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberCliMirage.Factory.extend({

		name: _emberCliMirage.faker.commerce.department

	});
});