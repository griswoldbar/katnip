Katnip.Models.Cat = Backbone.Model.extend();

Katnip.Models.CatCollection = Backbone.Collection.extend(
	{
		model: Cat,
		url: "/cats",
	}
)
