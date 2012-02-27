Katnip.Views.CatsNew = Backbone.View.extend({
  tagName: 'form',
  id: "new-cat",
  
  events: {
    "click a.leave": "leave",
    "click .upload button": "upload",
    "click submit": "save"
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
    // this.renderAttachments();    
 this.$('ul').append(JST['backbone/templates/tpl-cat-form-buttons']());
    this.attachUploader();
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
  
  upload: function() {
    this.uploader.send();
  },
  
  uploadSuccess: function(data) {
    this.model.fetch();
  },
  
  attachUploader: function() {
    var uploadUrl = "/cats/1/attachments.json";

    this.uploader = new uploader(this.uploadInput(), {
      url:      uploadUrl,
      success:  this.uploadSuccess,
      prefix:   'upload'
    });

    this.uploader.prefilter = function() {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) this.xhr.setRequestHeader('X-CSRF-Token', token);
    }
  },
  
  uploadInput: function() {
    // this.$('.upload input').attr('id',  'upload_' + 1);
    // this.$('.upload label').attr('for', 'upload_' + 1);
      
    //var blah = $('.upload input');
    return this.$('.upload input').get(0);
    //return '/Users/hosmer_angel/Desktop/jekyll.jpg';
  },
  
  renderAttachments: function() {
    var self = this;
    var $attachments = this.$('ul.attachments');
    $attachments.html('');

    this.model.attachments.each(function(attachment) {
      var attachmentView = $('<li><p></p><img></li>');
      $('p', attachmentView).text("Attached: " + attachment.escape('upload_file_name'));
      $('img', attachmentView).attr("src", attachment.get('upload_url'));
      $attachments.append(attachmentView);
    });
  },
  
  
})


