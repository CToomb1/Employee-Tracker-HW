const inquirer = require('inquirer');
require('console.table');

const connection = require('./config/connection').default;

const { getAllDepartments, getAllRoles, getAllEmployees} = require('./lib/db-employees');

const { startQuestions, createDepartmentQuestions, createRoleQuestions, createEmployeeQuestions } = require('./lib/prompts');

const startTracker = async () => {
  const { initialAction } = await inquirer.prompt(startQuestions);
  if (initialAction === 'Add a department') {
    createDepartmentQuestions();
  } else if (initialAction === 'Add a role') {
    createRoleQuestions();
  } else if (initialAction === 'Add an employee'){
    createEmployeeQuestions();
  } else {
    connection.end();
  }
};

const createDepartment = async () => {
  const { department_name, department_id } = await inquirer.prompt
  (createDepartmentQuestions);

  const createDepartment = await createDepartmentQuestions({ department_name, department_id});

  console.log(createDepartmentRes);
  return startAuction();
};

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
  startTracker();
});