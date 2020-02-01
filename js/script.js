// Business Logic
function Pizza(){
	this.size = undefined;
	this.toppings = [];
	this.sauce = undefined;
	this.sizePrice = 0;
	this.toppingsPrice = 0;
	this.totalPrice = 0;
}

// Determine base cost of pizza based on size
Pizza.prototype.addSize = function(pizza, size) {
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
	$(".sauces").removeClass("hidden");
}

// Remove pizza size from user list
Pizza.prototype.removeSize = function(pizza, size) {
	$(".crustSizes").removeClass("hidden");
	$("#your-" + size).addClass("hidden");
	$(".toppings").addClass("hidden");
	pizza.sizePrice = 0;
	pizza.showCost(pizza);
}

Pizza.prototype.addSauce = function(pizza, sauce) {
	$(".sauces").addClass("hidden");
	$("#your-sauce").append("<button class='your-" + sauce + " " + sauce + "' id='" + sauce + "'>" + sauce + "</button>");
	$(".toppings").removeClass("hidden");
	pizza.sauce = sauce;
}

Pizza.prototype.removeSauce = function(pizza, sauce) {
	$(".your-" + sauce).addClass("hidden");
	// $("#sauce").addClass("hidden");
	$(".toppings").addClass("hidden");
	$(".sauces").removeClass("hidden");
	pizza.sauce = undefined;
}

// Push toppings into pizza toppings array
Pizza.prototype.addTopping = function(pizza, topping) {
	$("#" + topping).addClass("hidden");
	$("#your-toppings").append("<img src='img/" + topping + ".png' alt='" + topping + "' id='" + topping + "'>");
	pizza.toppings.push(topping);
	pizza.toppingsPrice++;
	pizza.showCost(pizza);
}

// Remove toppings from pizza toppings array and adjust cost
Pizza.prototype.removeTopping = function(pizza, topping) {
	$("#" + topping).removeClass("hidden");
	for(i = 0; i < pizza.toppings.length; i++){
		if (pizza.toppings[i] === topping) {
			pizza.toppings.splice(i,1);
		}
	};
	pizza.toppingsPrice--;
	pizza.showCost(pizza);
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
		pizza.addSize(pizza, pizzaSize);
	});

	// User removes pizza sizes from order list
	$(".selected").click(function(){
		var size = $(this).val();
		pizza.removeSize(pizza, size);
	});

  // User selects sauce
	$(".sauce").click(function() {
		var sauce = event.target.id;
		pizza.addSauce(pizza, sauce);
	});

	// User removes sauce
	$("#your-sauce").on("click", function(){
		var sauce = event.target.id;
		pizza.removeSauce(pizza, sauce);
	});

	// User selects pizza toppings
	$(".topping").click(function() {
		var topping = $(this).val();
		pizza.addTopping(pizza, topping);
	});

	// User selects toppings to remove from order
	$("#your-toppings").on("click", function(){
		var topping = event.target.id;
		$("img#" + topping).addClass("hidden");
		pizza.removeTopping(pizza, topping);
	});

});