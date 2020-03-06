USE tracking_db;

INSERT INTO department
  (name)
VALUES
  ('Housekeeping'),
  ('Room Service'),
  ('Customer Service')
  ;

  INSERT INTO role
  (title, salary, department_id)
  VALUES
  ('Housekeeping', 3,000.00, 1);
  ('Room Service', 3,000.00, 2);
  ('Customer Service', 2,500, 3);

  INSERT INTO employee
  (first_name, last_name, role_id);
  ('Bob', 'Smith', 1);
  ('Smitty', 'Bobs', 2);
  ('John', 'Johnson', 3);