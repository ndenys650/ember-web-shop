import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return [
			{ 
				id: 1,
				name: 'First Category'
			},
			{
				id: 2,
				name: 'Second Category'
			}
		];
	}

});
