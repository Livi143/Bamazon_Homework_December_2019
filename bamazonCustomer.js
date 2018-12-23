// var mysql = require('mysql');
// var inquirer = require('inquirer');

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "bamazon_db"
// });

// connection.connect(function(err){
//     if (err) throw err;
//     console.log('Connection successful');
//     makeTable(); 
// });

// var makeTable = function() {
//     connection.query("SELECT * FROM products", function (err, res) {
//         for(var i = 0; i < res.length; i++){
//             console.log(res[i].itemid+"||"+res[i].product_name+" ||"+res[i].department_name+" ||"+res[i].price+" ||"+res[i].stock_quantity+"\n");
//         }
//         promptCustomer(res);
//     })
// }

// var promptCustomer = function(res) {
//     inquirer.prompt([{
//         type: "input", 
//         name: 'choice',
//         message: "what do you want to buy? (quit with Q)",
//     }]).then(function(answer){
//         var correct = false: 
//         for(var i = 0; i<res.length;i ++){
//             correct=true;
//             var product=answer.choice
//             var id = i;
//             inquirer.prompt({
//                 type: 'input',
//                 name: 'quant',
//                 message: 'what quantity would you like to purchase?',
//                 validate: function(value){
//                     if(isNaN(value)==false){
//                         return true;
//                     }   else {
//                         return false;
//                     }
//                 }
//             }).then(function(answer){
//                 if((res[id].stock_quantity.answer.quant)>0){
//                     connection.query("UPDATE products SET stock_quantity= '"+(res[id].stock_quantity - answer.quant)+" '", function(err,res2){
//                         console.log("thank you for your purchase!");
//                     })
//                 }   else {
//                     console.log("Not a valid selection");
//                     promptCustomer(res);
//                 }
//             })
//         }
//     })
// }