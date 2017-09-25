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