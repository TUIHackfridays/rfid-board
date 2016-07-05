define (
	['mustache', 'Collections/ActiveTags', 'Views/Pageview'],
	function (Mustache, ActiveTags, Pageview)
	{
		var Monitor = Pageview.extend(
		{
			initialize: function () {
				// Accounts for adduser
				this.tags = new ActiveTags();
				this.listenTo(this.tags, 'sync', this.evaluate);
			},
			
			render: function ()
			{
				// Build Pageview
				this.$el.html (Mustache.render (Templates.bluescreen, {}));
				
				// Call ping
				this.tags.fetch({reset: true});
				
				// partially hide navigation
				$('nav').css('opacity', '.25');
				
				// Panels parent
				//this.$container = this.$el.find("#container").eq(0);
								
				return this;
			},
			
			evaluate: function (tags)
			{
				var tag = tags.pop();
				var token = window.localStorage.getItem ('pingtoken');
				
				// On the load of dashboard, we remove the pingtoken, for testing.
				
				// Update screen text
				if (!token || tag.get('token') != token)
				{
					var user = tag.get('user');
					
					this.$el.find('h1').removeClass('fade');
					this.$el.find('h1.person').html(user.firstname + '!');
					
					console.log(tag.get('token'));
					
					window.localStorage.setItem ('pingtoken', tag.get('token'));
					
					setTimeout(function(){
						
						this.$el.find('h1').addClass('fade');
						
					}.bind(this), 10000)
				}
				
				setTimeout(function(){
						
					// Call ping
					this.tags.fetch({reset: true});
						
				}.bind(this), 500)
			}
		
		});
		
		return Monitor;
	}
);
