import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		// return data from database
		return this.store.findAll('category');
	},

	setupController(controller, model) {
		this._super(controller, model);

		controller.set('newCategory', this.store.createRecord('category'));
	},

	// recieve action from Add and Delete buttons on categories route
	actions: {

	    addNewCategory(newCategory) {
	      newCategory.save().then(
	        category => {
	          console.info('Response:', category);
	          this.controller.set('newCategory', this.store.createRecord('category'));
	        },
	        error => {
	          console.error('Error from server:', error);
	        });
	    },

	    editCategory(category) {
	      category.set('isEditing', true);
	    },

	    updateCategory(category) {
	      category.save().then(
	        category => category.set('isEditing', false)
	      );
	    },

	    deleteCategory(category) {
	      category.destroyRecord();
	    }
	}
});
