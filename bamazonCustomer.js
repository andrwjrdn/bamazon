//Variables for requires/connection

var mysql = require('mysql')
var inquirer = require('inquirer')
var Table = require('cli-table');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'yourRootPassword',
	database: 'bamazon'
});

connection.connect(function(err){
	if(err)throw err;
	console.log('-----------------------------------------------');
	console.log('		WELCOME TO BAMAZON	');
	console.log('-----------------------------------------------');
	console.log('');
	console.log('What are you looking for today?');
	console.log('');
});


 


//FUNCTIONS

//Function for displaying products to user with ID's, names, and prices 	
function display () {
	var query = 'SELECT * FROM products';
	connection.query(query, function(err, res){
	if (err) throw err;
	var newTable = new Table ({
		head: ['ID', 'Product', 'Department', 'Pice', 'Stock']
		, colWidths: [10, 30, 15, 10, 10]
		, colAligns: ['center', 'center','center', 'center', 'center']
	
	});
	
	for (var i = 0; i < res.length; i++) {
		newTable.push([
			res[i].item_id,
			res[i].product_name, 
			res[i].department_name, 
			res[i].price, 
			res[i].stock_quantity
		])
	};
	console.log(newTable.toString());
	userMessage();
 
	});
};

display();

//Function for asking user the ID of product they would like to buy
function userMessage () {
	inquirer.prompt ([
		{
			name: 'ID',
			type: 'input',
			message: 'Enter in the ID for item you would like.',
			filter: Number
		},

		{
			name: 'Stock Quantity',
			type: 'input',
			message: 'Enter in how many items you woud like.',
			filter: Number
		},
	]).then(function(answers){
		var itemCount = answers.Stock;
		var itemID = answers.ID;

	})
}

//Function to check if there is enough product for user to order, if not error message display



