// Business Logic
function Pizza(size){
	this.size = size;
	this.toppings = [];
}


// User Logic
$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var pizzaSize = $("#pizza-size").val();
		var pizza = new Pizza(pizzaSize);
		console.log("pizza: " + pizza)
		 // $.each($("input[name='toppings']:checked"), function(){
   //              pizza.toppings.push($(this).val());
	});
});