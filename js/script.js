// Business Logic
function Pizza(){
	this.size = undefined;
	this.toppings = [];
	this.sizePrice = 0;
	this.toppingsPrice = 0;
	this.totalPrice = 0;
}

// Determine base cost of pizza based on size
Pizza.prototype.baseCost = function(pizza, pizzaSize) {
	console.log("pizzaSize: " + pizzaSize);
	pizza.size = pizzaSize;
	console.log("pizzaSize: " + pizza.size);
	if (pizza.size === "small") {
		pizza.sizePrice = 12;
	} else if (pizza.size === "medium") {
		pizza.sizePrice = 18;
	} else {
		pizza.sizePrice = 24;
	}
	pizza.totalPrice = pizza.sizePrice + pizza.toppingsPrice;
	console.log("pizzaCost: " + pizza.sizePrice);
	pizza.showCost(pizza);
}

// Push toppings into pizza toppings array
Pizza.prototype.addTopping = function(pizza, topping) {
	var topping = topping;
	pizza.toppings.push(topping);
	pizza.toppingsPrice += 1;
	console.log("topping: " + topping);
	console.log("pizza.toppings: " + pizza.toppings);
}

// Output total pizza cost to the DOM
Pizza.prototype.showCost = function(pizza) {
	if (pizza.sizePrice = 0) {
		alert("Choose pizza size first!");
	} else {
		$("#results").html("$" + pizza.totalPrice + ".00");
	}
}

// User Logic
$(document).ready(function() {
	var pizza = new Pizza;

	// User selects pizza size
	$(".size").click(function() {
		var pizzaSize = event.target.id;
		console.log("pizzaSize: " + pizzaSize);
		pizza.baseCost(pizza, pizzaSize);
	});

	// User selects pizza toppings
	$(".topping").click(function() {
		var topping = event.target.id;
		console.log("topping: " + topping);
		pizza.addTopping(pizza, topping);
		pizza.showCost(pizza);
	});


});