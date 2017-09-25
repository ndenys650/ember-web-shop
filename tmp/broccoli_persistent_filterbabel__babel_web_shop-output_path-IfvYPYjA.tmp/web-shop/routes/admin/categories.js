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
		}
	});
});