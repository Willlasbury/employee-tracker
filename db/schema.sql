DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE
    departments(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    roles (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,
        FOREIGN key (department_id) 
        REFERENCES departments(id)
        ON DELETE CASCADE
    );

CREATE TABLE
    employees (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT,
        Foreign Key (role_id) 
        REFERENCES roles(id) 
        ON DELETE CASCADE,
        Foreign Key (manager_id) 
        REFERENCES employees(id)
        ON DELETE SET NULL
    );

SOURCE seeds.sql;