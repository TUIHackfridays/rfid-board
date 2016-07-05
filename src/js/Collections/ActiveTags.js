define (
	['backbone', 'Models/Tag'],
	function(Backbone, Tag)
	{
		var ActiveTags = Backbone.Collection.extend(
		{
			typestring : "tags",

			model: Tag,

			//required: {name: 'New Account', slug: 'Unique'},

			initialize : function (options)
			{
				if(options) $.extend(this, options);

				// Event listeners
				//this.on ('backgrid:edited', this.patchModel);
				//this.on ('backgrid:edited', this.postModel);
			},

			url : function()
			{
				var url = Superadmin.config.url + 'accounts/1/tags/ping';

				return url;
			},
			
			/*
			 * Returns the models inside the response to create the collection
			 */
			parse : function (response)
			{					
				if (response.tag)
				{
					response.tag.token = response.token;
				}
				
				
				return (response.tag)? 
				
					[response.tag]: [];
			}
		});

		return ActiveTags;
	}
);
