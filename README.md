# Bamazon

## Description

This application implements a simple command line based storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) database package
(https://www.npmjs.com/package/cli-table) command line tables
 

### Customer Interface
This interface allows the user to see store inventory. When viewing the inventory, it is displayed as a table with Item ID's, Product Name, Department, Price, and Stock Quantity. Users are able to purchase items by entering the item ID followed by quantity of how much to purchase. If the user selects a quantity that is in stock, the order can be complete which displays purchase price and updates the store database. If the desired quantity is greater than the stock quantity, the user receives and error message to re-do their order.

## Installation

To install the application follow the instructions below:

`git clone this repository in terminal
run node bamazonCustomer.js`

### Bamazon Demo

A Screenshot demo of the app: 

<img width="714" alt="Screen Shot 2019-07-11 at 4 43 23 PM" src="https://user-images.githubusercontent.com/44654955/61092583-bc226400-a3fb-11e9-9d69-c742d25df1df.png">


