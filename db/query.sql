USE company_db;

SELECT
    e1.id,
    e1.first_name,
    e1.last_name,
    roles.title,
    departments.name as department,
    roles.salary,
    CONCAT(e2.first_name,' ', e2.last_name) AS manager
FROM employees e1
    JOIN roles ON e1.role_id = roles.id
    JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees e2 ON e1.manager_id = e2.id