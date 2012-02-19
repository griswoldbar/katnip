Katnip.Routers.AppRouter = Backbone.Router.extend(
	{
		routes:
		{
			"": "list",
			"cats/:id" : "catDetails",
			"cats/:id/events" : "catEvents"
		},
		list: function()
		{
			this.catList = new Katnip.Models.CatCollection();
			this.catListView = new Katnip.Views.CatListView({model:this.catList});
			this.catList.fetch();
			$('#sidebar').html(this.catListView.render().el);
		},
		
		catDetails: function(id)
		{
			this.cat = this.catList.get(id);
			this.cat.getEvents();
			this.catView = new Katnip.Views.CatView({model:this.cat});
			$('#details').html(this.catView.render().el);
		},
		
		catEvents: function(id)
		{	
		}
	}
)
