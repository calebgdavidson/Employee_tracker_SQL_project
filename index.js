var inquirer = require("inquirer");
var mysql = require("mysql");

const greet = (name=”Everyone”) => {    console.log(`Hello ${name}`);}
greet();

var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "password",
database: "employee_tracker_SQL"
});

connection.connect((err) => {
if (err) throw err;
  runSearch();
});

function runSearch() {
inquirer
.prompt({
    name: "options",
    type: "list",
    message: "Welcome, please make a selection!",
    choices: 
[
    "Create Department",
    "Create Employee",
    "Create Role",
]})
.then(function(answer) {
    console.log(answer);

if (answer.selection === "Create Employee") {
    createEmployee();
}
else if(answer.selection === "Create Department") {
    createDept(); 
}
else if(answer.selection === "Create Role") {
    createRole(); 
}else{
    connection.end();
}});
}