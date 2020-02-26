USE tracking_db;

INSERT INTO department
  (name)
VALUES
  ('Human Resource'),
  ('IT'),
  ('Customer Service')
  ;

  INSERT INTO role
  (title, salary, department_id)
  VALUES
  ('HR Specialist', 30,000.00, 1);
  ('IT Specialist', 30,000.00, 2);
  ('Customer Service', 25,000, 3);

  INSERT INTO employee
  (first_name, last_name, role_id);
  ('Bob', 'Agnoush', 1);
  ('Michael', 'Hunt', 2);
  ('Ben', 'Dover', 3);