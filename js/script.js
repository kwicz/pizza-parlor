// Business Logic
function Pizza(){
	this.size = undefined;
	this.toppings = [];
	this.sizePrice = 0;
	this.toppingsPrice = 0;
	this.totalPrice = 0;
}

// Determine base cost of pizza based on size
Pizza.prototype.baseCost = function(pizza, size) {
	pizza.size = size;
	if (pizza.size === "small") {
		pizza.sizePrice = 12;
	} else if (pizza.size === "medium") {
		pizza.sizePrice = 18;
	} else {
		pizza.sizePrice = 24;
	}
	pizza.showCost(pizza);
	$(".crustSizes").addClass("hidden");
	$("#your-" + size).removeClass("hidden");
	$(".toppings").removeClass("hidden");
}

// Remove pizza size from user list
Pizza.prototype.removeSize = function(pizza, size) {
	$(".crustSizes").removeClass("hidden");
	$("#your-" + size).addClass("hidden");
	$(".toppings").addClass("hidden");
	pizza.sizePrice = 0;
	pizza.showCost(pizza);
}

// Push toppings into pizza toppings array
Pizza.prototype.addTopping = function(pizza, topping) {
	pizza.toppings.push(topping);
	pizza.toppingsPrice++;
	pizza.showCost(pizza);
	$("#" + topping).addClass("hidden");
	$("#your-toppings").append("<img src='img/" + topping + ".png' alt='" + topping + "'>");
}

// Output total pizza cost to the DOM
Pizza.prototype.showCost = function(pizza) {
	pizza.totalPrice = pizza.sizePrice + pizza.toppingsPrice;
	$("#results").html("$" + pizza.totalPrice + ".00");
	$("#order").removeClass("hidden");
}

// User Logic
$(document).ready(function() {
	var pizza = new Pizza;

	// User selects pizza size
	$(".size").click(function() {
		var pizzaSize = event.target.id;
		pizza.baseCost(pizza, pizzaSize);
	});

	// User selects pizza toppings
	$(".topping").click(function() {
		var topping = $(this).val();
		pizza.addTopping(pizza, topping);
	});

	// User removes pizza sizes from order list
	$(".selected").click(function(){
		var size = $(this).val();
		pizza.removeSize(pizza, size);
	});

	// User removes toppings from order
	// $("#your-toppings").click(function(){

	// })

});