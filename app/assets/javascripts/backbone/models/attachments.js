Katnip.Models.Attachment = Backbone.Model.extend({
});

Katnip.Collections.Attachments = Backbone.Collection.extend({ 
  model: Katnip.Models.Attachment, 
  url: '/attachments'
});
