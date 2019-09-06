// implemented in dummy-data.js 

function Meal(info){
	this.id = info.id;
	this.categoryIds = info.categoryIds;
	this.title = info.title;
	this.affordability = info.affordability;
	this.complexity = info.complexity;
	this.imageUrl = info.imageUrl;
	this.duration = info.duration;
	this.ingredients = info.ingredients;
	this.steps = info.steps;
	this.isGlutenFree = info.isGlutenFree;
	this.isVegan = info.isVegan;
	this.isVegetaria = info.isVegetaria;
	this.isLactoseFree = info.isLactoseFree;
}

export default Meal;
