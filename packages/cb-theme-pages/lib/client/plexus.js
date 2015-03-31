Meteor.startup(function() {
	Router.map(function() {
		this.route('plexus', {
			path: '/plexus',
			template: getTemplate('plexus')
		});
	});
});




