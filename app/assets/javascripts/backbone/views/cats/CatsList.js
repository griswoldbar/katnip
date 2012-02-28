Katnip.Views.CatListView = Backbone.View.extend(
	{
		tagName: "div",
		template: JST['backbone/templates/tpl-cat-list'],
		initialize: function()
		{
			this.model.bind("reset",this.render,this);
		 	this.model.bind("add",this.render,this);	
		},
		render: function()
		{
			this.model.sort({silent:true});
			$(this.el).html(this.template({cats:this.model.toJSON()}));
			return this;
		}	
		
	}
)