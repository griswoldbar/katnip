Katnip.Models.Cat = Backbone.Model.extend();

Katnip.Models.CatCollection = Backbone.Collection.extend(
	{
		model: Katnip.Models.Cat,
		url: "/cats",
	}
)
