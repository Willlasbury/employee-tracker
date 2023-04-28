DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

USE company;

CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN key (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT,
        manager_id INT,
        Foreign Key (role_id) REFERENCES role(id),
        Foreign Key (manager_id) REFERENCES employee(id)
)