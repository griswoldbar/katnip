Katnip.Routers.AppRouter = Backbone.Router.extend(
	{
		routes:
		{
			"": "list",
			"cats/:id" : "catDetails",
			"new" : "newCat",
			"cats/:id/events" : "catEvents"
		},
		
		list: function()
		{
			if(typeof this.catList == 'undefined')
			{
			this.catList = new Katnip.Models.CatCollection();
			this.catListView = new Katnip.Views.CatListView({model:this.catList,el: "#sidebar"});
			this.catList.fetch();
			};
			
		},
		
		catDetails: function(id)
		{
			this.cat = this.catList.get(id);
			this.cat.getEvents();
			this.catView = new Katnip.Views.CatView({model:this.cat});
			this.eventView =new Katnip.Views.EventListView({model: this.cat.events});
			$('#details').html(this.catView.render().el);
			$('#catdetails'+id).html(this.eventView.render().el);
		},
		
		newCat: function() {
          this.newCatView = new Katnip.Views.CatsNew({ collection: this.catList });
          this.newCatView.render();
        },
        
		catEvents: function(id)
		{	
		}
	}
)
