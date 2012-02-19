Katnip.Views.EventListView = Backbone.View.extend(
	{
		tagName: "ul",
		initialize: function()
		{
			this.model.bind("reset",this.render,this);
		},
		render: function()
		{
			_.each(this.model.models, function(event){
				$(this.el).append(new Katnip.Views.EventListItemView({model:event}).render().el);
			},this);
			return this;
		}	
	}
)

Katnip.Views.EventListItemView = Backbone.View.extend(
	{
	 	tagName: "li",
	 	template: JST['backbone/templates/tpl-cat-events'],
	 	render: function()
	 	{
	 		$(this.el).html(this.template(this.model.toJSON()));
	 		return this;
	 	}
	 
	}
)