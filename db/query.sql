use company_db -- SELECT
    --     employees.id,
    --     first_name,
    --     last_name,
    --     roles.title,
    --     departments.name,
    --     roles.salary,
    --     employees.manager_id 
    -- FROM
    --     employees 
    --     JOIN roles ON employees.role_id = roles.id
    --     JOIN departments on roles.department_id = departments.id
    -- ORDER BY employees.id ASC;
WITH RECURSIVE company AS (
        SELECT
            id,
            first_name,
            last_name,
            manager_id
   
        
       FROM employees WHERE manager_id is NULL

       UNION ALL

       SELECT e.id, e.first_name, e.last_name, c.manager_id
       from employees e, company c WHERE e.manager_id = c.id)

       SELECT  e.id, e.first_name, e.last_name c.manager_id from company c
       LEFT JOIN employees e
       ON c.id = e.id
       ORDER BY e.id