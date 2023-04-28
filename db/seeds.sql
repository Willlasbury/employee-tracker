USE company;

INSERT INTO department (name) 
    VALUES ("Underwater Basket Weaving");



INSERT INTO role (title, salary, department_id) 
    VALUES ("Manager", "2", 1);

INSERT INTO role (title, salary, department_id) 
    VALUES ("Weaver", "15.50", 1);



INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES ("Tonya", "Hammond", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
    VALUES ("Will", "Asbury", 2, 1);


