USE company;

INSERT INTO department (name)
VALUES ("Underwater Basket Weaving"), ("Wheel Designers"), ("Boat Sinking"), ("Napping");

INSERT INTO
    role (title, salary, department_id) VALUES 
("UBW Manager", "2.50", 1), 
("Weaver", "15.50", 1), 
("WD Manager", "2.50", 2), 
("Carvers", "15.50", 2), 
("BS Manager", "2.50", 3), 
("Hole Maker", "15.50", 3), 
("Nap Manager", "2.50", 4), 
("Pillow Fluffer", "15.50", 4);

INSERT INTO
    employee (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES 
("Tonya", "Hammond", 1, NULL), 
("Will", "Asbury", 2, 1), 
("Jeff", "Edwards", 3, NULL), 
("ZT", "Tanner", 4, 3), 
("Another", "Name", 5, NULL), 
("Craig", "Craig", 6, 5), 
("Depression", "Kitty", 7, NULL), 
("John", "Doe", 7, 7);