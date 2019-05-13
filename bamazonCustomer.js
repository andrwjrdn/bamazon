//Variables for requires/connection

var mysql = require('mysql')
var inquirer = require('inquirer')
var cliTable = require ('cli-table')

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: '',
	database: 'bamazon'
});

connection.connect(function(err){
	if(err)throw err;
	console.log('-----------------------------------------------');
	console.log('							WELCOME TO BAMAZON								');
	console.log('-----------------------------------------------');
	console.log('');
	console.log('What are you looking for today?');
	console.log('');
});

//FUNCTIONS

//Function for displaying products to user with ID's, names, and prices 	

//Function for asking user the ID of product they would like to buy

//Function to check if there is enough product for user to order, if not error message display



