Katnip.Views.CatListView = Backbone.View.extend(
	{
		tagName: "div",
		template: JST['backbone/templates/tpl-cat-list'],
		initialize: function()
		{
			this.model.bind("reset",this.render,this);
		},
		render: function()
		{
			$(this.el).html(this.template({cats:this.model.toJSON()}));
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

Katnip.Views.CatsNew = Backbone.View.extend({
  tagName: 'form',
  id: "new-cat",
  
  events: {
    "submit": "save",
    "click a.leave": "leave"
  },

  initialize: function() {
    _.bindAll(this, "render", "saved");
    this.newCat();
  },

  newCat: function() {
    this.model = new Katnip.Models.Cat();
    this.form = new Backbone.Form({ model: this.model });
  },

  render: function () {
    $(this.el).html(this.form.render().el);
    this.$('ul').append(JST['backbone/templates/tpl-cat-form-buttons']());
    return this;
  },

  renderFlash: function(flashText) {
    $(this.el).prepend(JST['backbone/templates/new-cat-flash']({ flashText: flashText, type: 'success' }));
  },

  save: function(event) {
    this.form.commit();
    this.model.save({}, { success: this.saved });
    return false;
  },

  saved: function() {
    var flash = "Created cat: " + this.model.escape('name');
    this.collection.add(this.model);
    this.newCat();
    this.render();
    this.renderFlash(flash);

    // this.leave();
  },

  leave: function() {
    this.unbind();
    this.remove();
  }
})


