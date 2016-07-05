define (
	['backbone'],
	function (Backbone)
	{
		var Tag = Backbone.Model.extend({
		
			typestring: 'tags',
			
			/*url: function ()
			{
				var url = Superadmin.config.url + '/accounts/1/tags/ping';
				
				return url;
			}*/
		});
		
		return Tag;
	}
);