Katnip.Views.CatListView = Backbone.View.extend(
	{
		tagName: "ul",
		initialize: function()
		{
			this.model.bind("reset",this.render,this);
		},
		render: function()
		{
			_.each(this.model.models, function(cat){
				$(this.el).append(new Katnip.Views.CatListItemView({model:cat}).render().el);
			},this);
			return this;
		}	
	}
)
Katnip.Views.CatListItemView = Backbone.View.extend(
	{
	 	tagName: "li",
	 	template: JST['backbone/templates/tpl-cat-list'],
	 	render: function()
	 	{
	 		$(this.el).html(this.template(this.model.toJSON()));
	 		return this;
	 	}
	 
	}
)

Katnip.Views.CatView = Backbone.View.extend(
{
	template: JST['backbone/templates/tpl-cat-details'],
	render: function()
	{
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
}
)

