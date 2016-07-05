define(
	['backbone', 'Session', 'Views/Dashboard', 'Views/Monitor', 'Views/Team', 'Views/AccountsView',
		'Views/UsersView', 'Views/Rights'],
	function (Backbone, Session, Dashboard, Monitor, Team, Accounts, Users, Rights)
	{
		var Router = Backbone.Router.extend (
		{
			routes :
			{
				'accounts': 'accounts',
				'users': 'users',
				'manage/:rights': 'rights',
				'monitor': 'monitor',
				'team': 'team',
				'logout': 'logout',
				'*path': 'dashboard'
			},

			/**
			 *	General
			 **/

			dashboard : function ()
			{
				Session.setView (new Dashboard ());
			},

			monitor : function ()
			{
				Session.setView (new Monitor ());
			},
			
			team : function ()
			{
				Session.setView (new Team ());
			},

			accounts : function ()
			{
				Session.setView (new Accounts());
			},

			users : function ()
			{
				Session.setView (new Users());
			},

			rights : function (type)
			{
				Session.setView (new Rights ([], type));
			},

			logout : function ()
			{
				Session.revoke ();
			},

		});

		return Router;
	}
);
