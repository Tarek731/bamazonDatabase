var searchTermA = process.argv[2]; 
var searchTermB = process.argv[3];
// var searchTermC =
var mysql = require("mysql");
var inquirer = require("inquirer");
// ./ only for files

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'letterxbox12',
  database: 'bamazon'
});

connection.connect(function(err){
  if(err) throw err;
  console.log("connected as id "+ connection.threadId);
});

connection.query("select * from products", function(err,result){
      	// for (var i=0; i <res.lenght; i++)

        //  select * get every peice of information

    // if(err) throw err;
    //   console.log(result);
    //   console.log("What is the id of the item you would like to buy?:");
    //   console.log("How many units of the product would you like to buy?:"); 
   
  inquirer.prompt([
    {
      type: 'input',
      name: 'item_id',
      message: 'What is the id of the item you would like to buy?',
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
    },
    {
      type: 'list',
      name: 'units',
      message: 'What is the number of units you would like to buy?',
      choices: ['1', '2', '3', '4', '5', '6'],
      // filter: function (val) {
      //   return val.toLowerCase();
      // }
    }
  ]).then(function (answers) {
    console.log(JSON.stringify(answers, null, '  '));
    var productID = answers.item_id -1;
    var item_id  = parseInt(answers.item_id);
    var units  = parseInt(answers.units);
    // not needed can select form table using result.stock_quantity
    if (result[productID].stock_quantity >= units){

      console.log("items are in stock");

    }
    else{
      console.log("items not in stock");
    }
    // tring to assgn stock quantity from table to variable
    
  




    // connection.query(query, [item_id], function (error, results, fields) {
    // error will be an Error if one occurred during the query 
    // results will contain the results of the query 
    // fields will contain information about the returned results fields (if any) 
      
      // results contain the item id stock number and id
      // matching id item to user input
      // for (var i = 0; i < results.length; i++) {
         
      //    console.log(results[i].item_id);
      //     console.log(results[i].units);
      //  } 
// i want to match the id to the quantity results from the table
      //  (results){
          //i want to get the value for stock quantity from table and compare it to  
      // } 
    // if(results[i].item_id < results[i].units)
    //   console.log("product are in stock")

    // });
    // console.log(tableData);
    // make if statement
  });

// update sql to reflect item picked
// function updateCrud() {
//   console.log("Updating all Rocky Road quantities...\n");
//   connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         // not sure
//         quantity: answers.units
//       },
//       {
//         flavor: "Rocky Road"
//       }

    


});
