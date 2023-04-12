var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table'); 

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
    message: "Welcome, please make a selection",
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

viewDepartments = () => {
    connection.query(`SELECT * FROM department ORDER BY department_id ASC;`, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        startApp();
    })
};

viewRoles = () => {
    connection.query(`SELECT role_id, role_title, salary, department_id`, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        startApp();
    })
};

viewEmployees = () => {
    connection.query(`SELECT employee_id, first_name, last_name, department_id, salary,`, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        startApp();
    })
};