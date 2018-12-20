var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log('Connection successful');
    makeTable(); 
});

var makeTable = function() {
    connection.query("SELECT * FROM products", function (err, res) {
        for(var i = 0; i < res.length; i++){
            console.log(res[i].itemid+"||"+res[i].product_name+" ||"+res[i].department_name+" ||"+res[i].price+" ||"+res[i].stock_quantity+"\n");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function(results){
    inquirer.prompt([
        {
        type: "input",
        name: "purchase_item",
        message: "please enter item id of desired purchase? ",
        validate: function(value){
            if (isNaN(parseInt(value))){
                return "Please enter the item id number ";
            } else {
                return true;
            }
        }

    }, 
    {
        type: "input",
        name: "quantity",
        message: "how many would you like to purchase",
        validate: function(value){
            if (isNaN(parseInt(value))){
                return "Please enter the numeric quantity you'd like to purchase";
            } else {
                return true;
            }
        }

    }
]).then(function(answer){
        //var correct = false;
        console.log(answer);
        console.log(results[1].itemid == parseInt(answer.purchase_item));
        console.log(results[1].stock_quantity >= parseInt(answer.quantity))
        var choosenItem;
        console.log(results[1].itemid);
        for (var i=0 ; i < results.length; i++){
            //console.log("message " + res[i]);
            if ((results[i].itemid == parseInt(answer.purchase_item)) && (results[i].stock_quantity >= parseInt(answer.quantity))){
                console.log("results[i]: ",results[i]);
                results[i].stock_quantity - answer.quantity;

                console.log(results[i]);
                return console.log("requested amount is in stock! you can proceed to purchase");

            } 

            
        }
    })
}
// CHECKOUT ICECREAM CRUD TO UPDATE THE SQL DATABSE!!!










