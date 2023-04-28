DROP DATABASE IF EXISTS company;

CREATE DATABASE company;

USE company;

CREATE TABLE
    department(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    role (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT NOT NULL,
        FOREIGN key (department_id) REFERENCES department(id) ON DELETE
        SET NULL
    );

CREATE TABLE
    employee (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT,
        Foreign Key (role_id) REFERENCES role(id),
        Foreign Key (manager_id) REFERENCES employee(id)
    )