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