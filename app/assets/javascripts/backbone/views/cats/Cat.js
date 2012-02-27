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