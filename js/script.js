// Business Logic
function Pizza(size){
	this.size = size;
	this.toppings = [];
	this.price = 0;
}

// Determine base cost of pizza based on size
Pizza.prototype.baseCost = function(pizza) {
	if (pizza.size === "small") {
		pizza.price = 12;
	} else if (pizza.size === "medium") {
		pizza.price = 18;
	} else {
		pizza.price = 24;
	}
	console.log("pizzaCost: " + pizza.price);
}

// Push toppings into pizza toppings array
Pizza.prototype.addTopping = function(pizza, topping) {
	var topping = topping;
	pizza.toppings.push(topping);
	pizza.price += 1;
	console.log("topping: " + topping);
	console.log("pizza.toppings: " + pizza.toppings);
}

// Output total pizza cost to the DOM
Pizza.prototype.showCost = function(pizza) {
	$("#results").html("$" + pizza.price + ".00");
}

// User Logic
$(document).ready(function() {
	var pizza = undefined;

	// User selects pizza size
	$(".size").click(function() {
		var pizzaSize = event.target.id;
		pizza = new Pizza(pizzaSize);
		pizza.baseCost(pizza);
		pizza.showCost(pizza);
	});

	// User selects pizza toppings
	$(".topping").click(function() {
		var topping = event.target.id;
		console.log("topping: " + topping);
		pizza.addTopping(pizza, topping);
		pizza.showCost(pizza);
	});


});