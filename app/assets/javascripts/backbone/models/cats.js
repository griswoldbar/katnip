Katnip.Models.Cat = Backbone.Model.extend(
    {
        schema: {
            title: { type: "Text" }
        }
    }
    
);

Katnip.Models.CatCollection = Backbone.Collection.extend(
	{
		model: Katnip.Models.Cat,
		url: "/cats"
	}
)
