const consola = require('consola');
const connection = require('../config/connection').default;


const getAllDepartments = () => {
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM departments', (err, departmentData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(departmentData);
    });
    console.log(getQuery.sql);
  });
};

const getAllRoles = () => {
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM roles', (err, roleData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(roleData);
    });
    console.log(getQuery.sql);
  });
};

const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM employees', (err, employeeData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(employeeData);
    });
    console.log(getQuery.sql);
  });
};

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
};
