Katnip.Views.CatsNew = Backbone.View.extend({
  tagName: 'form',
  id: "new-cat",
  
  events: {
    "click a.leave": "leave",
    "click a.newCat": "save"
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
    $(this.el).dialog({ modal: true });
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
  },

  leave: function() {
    this.unbind();
    this.remove(); 
    $(this.el).dialog("close");
  },
  
 
})


