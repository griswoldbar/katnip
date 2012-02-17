Katnip.Views.CatListView = Backbone.View.extend(
	{
		tagName: "ul",
		initialize: function()
		{
			this.model.bind("reset",this.render,this);
		},
		render: function()
		{
			_.each(this.model.models, function(entity){
				$(this.el).append(new Katnip.Views.CatListItemView({model:entity}).render().el);
			},this);
			return this;
		}	
	}
)
Katnip.Views.CatListItemView = Backbone.View.extend(
	{
	 	tagName: "li",
	 	template: _template($('#tpl-cat-details').html()),
	 	render: function()
	 	{
	 		$(this.el).html(this.template(this.model.JSON()));
	 		return this;
	 	}
	 
	}
)

Katnip.Views.CatView = Backbone.View.extend(
{
	template: _.template($('#tpl-cat-details').html()),
	render: function()
	{
		$(this.el).html(this.template(this.model.toJSON()));
	}
}
)

