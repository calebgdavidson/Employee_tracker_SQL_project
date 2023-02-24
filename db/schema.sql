DROP DATABASE IF EXISTS employee_tracker_SQL;
CREATE DATABASE employee_tracker_SQL;
USE employee_tracker_SQL;

-- Employee
CREATE TABLE employee (
 PersonID int,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
role_id INT,
PRIMARY KEY (id),
);

-- Employee role
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT,
PRIMARY KEY (id)
);

-- Employee department
CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);