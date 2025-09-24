const readline = require('readline');

let employees = [
  { name: 'DHILLY', id: '23BAI70123' },
  { name: 'SUNNY', id: '23BAI70567' },
  { name: 'CHINTU', id: '23BAI70678' },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = () => {
  console.log('\nEmployee Management System');
  console.log('1. Add Employee');
  console.log('2. List Employees');
  console.log('3. Remove Employee');
  console.log('4. Exit');
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        addEmployee();
        break;
      case '2':
        listEmployees();
        break;
      case '3':
        removeEmployee();
        break;
      case '4':
        rl.close();
        console.log('Exiting the application. Goodbye!');
        break;
      default:
        console.log('Invalid choice. Please try again.');
        menu();
    }
  });
};

const addEmployee = () => {
  rl.question('Enter employee name: ', (name) => {
    rl.question('Enter employee ID: ', (id) => {
      employees.push({ name, id });
      console.log(`Employee ${name} (ID: ${id}) added successfully.`);
      menu();
    });
  });
};

const listEmployees = () => {
  console.log('\nEmployee List:');
  if (employees.length === 0) {
    console.log('No employees found.');
  } else {
    employees.forEach((emp, i) => console.log(`${i + 1}. Name: ${emp.name}, ID: ${emp.id}`));
  }
  menu();
};

const removeEmployee = () => {
  rl.question('Enter employee ID to remove: ', (id) => {
    const initialLength = employees.length;
    employees = employees.filter(emp => emp.id !== id);
    if (employees.length < initialLength) {
      console.log(`Employee with ID ${id} removed successfully.`);
    } else {
      console.log(`Employee with ID ${id} not found.`);
    }
    menu();
  });
};

menu();