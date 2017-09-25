import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		// return data from database
		return this.store.findAll('category');
	},

	// recieve action from Add and Delete buttons on categories route
	actions: {

		addNewCategory(id, name) {
			// add data from entered data model into database
			this.store.createRecord('category', {id, name}).save();
		},

		deleteCategory(category) {
			// delete database record
			category.destroyRecord();
		}

	}
});
