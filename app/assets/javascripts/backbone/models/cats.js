Katnip.Models.Cat = Backbone.Model.extend(
	{
		initialize: function()
		{
			this.events = new Katnip.Models.EventCollection();
		},
		getEvents : function()
		{		
			this.events.url = '/cats/' + this.id + '/events';
			this.events.fetch();
		}
	}
)

Katnip.Models.CatCollection = Backbone.Collection.extend(
	{
		model: Katnip.Models.Cat,
		url: "/cats",
	}
)
