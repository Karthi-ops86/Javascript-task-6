let employees = [
    {
        id: 142,
        name: "Karthick M",
        department: "FRONTEND DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
  {
        id: 143,
        name: "ARUN M",
        department: "FRONTEND DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
  {
        id: 144,
        name: "DILIP M",
        department: "FRONTEND DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
  {
        id: 145,
        name: "MOHAN M",
        department: "FRONTEND DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
  {
        id: 146,
        name: "GOKUL M",
        department: "BACKEND DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
      {
        id: 147,
        name: "MUTHU M",
        department: "FULL STACK DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
  {
        id: 148,
        name: "NISHANT M",
        department: "SQL DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
  {
        id: 149,
        name: "BABU M",
        department: "FULL STACK DEVELOPER",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "01-02-2026"
    },
];


console.log("1.Display all employees")
employees.forEach((v, i) => {
    console.log(`
        Name:${v.name}\n
        EmployeeId:${v.id}\n
        Department:${v.department}\n
        Experience:${v.experience}\n
        Salary:${v.salary}\n
        Joining Date${v.joiningDate}\n
        Skills:${v.skills}`)
})



console.log("2.Find employees whose salary is greater than ₹40,000.")
let Above40kSalaryEmp = employees.filter((v, i) => {
    return v.salary >= 40000;
})

console.log(...Above40kSalaryEmp)


console.log("3.Find a particular employee")

let userId = Number(prompt("Enteryour Id Number"))

let searchEmpUsingId = employees.find((v, i) => {
    return v.id === userId
})

searchEmpUsingId ? console.log(searchEmpUsingId) : console.log("404 Not Found User")


console.log("4.Calculate the total salary of all employees.")
let allEmpTotalSalary = employees.reduce((a, v, i) => {
    return a += v.salary
}, 0)
console.log("Total Salary : " + allEmpTotalSalary)


console.log("5.Check whether at least one employee has salary above ₹1,00,000")
let above1LakhsSalaryEmp = employees.some((v, i) => {
    return v.salary >= 100000
})

above1LakhsSalaryEmp ? console.log("Yes Some Employee has salary above 1 Lakhs") :
    console.log("No one has salary above 1 lakhs")



console.log(`6.Check whether every employee has at least 1 year of experience.`)
let above1YearExperienceEmp = employees.every((v, i) => {
    return v.experience >= 1
})
above1YearExperienceEmp ? console.log("Yes All Employees Have 1 Year Experince") :
    console.log("No All Employees don't have 1 year Experience")

// Sort employees by salary from highest to lowest.
console.log("7.Sort employees by salary from highest to lowest.")

let empSortingBySalary = employees.sort((a, b) => {
    return b.salary - a.salary
})
console.log(...empSortingBySalary)


console.log("8.Array manipulation")
let newEmpolyee = {
    id: 109,
    name: "KARTHICK",
    department: "IT",
    salary: 50000,
    experience: 2,
    skills: ["HTML", "CSS", "Java"]
}
let newEmpolyee1 = {
    id: 110,
    name: "ARUN",
    department: "IT",
    salary: 60000,
    experience: 3,
    skills: ["HTML", "CSS", "Java"]
}

employees.push(newEmpolyee)

employees.pop()

employees.unshift(newEmpolyee1)

employees.shift()
console.log(...employees)

console.log("9.Use object destructuring to extract")

let [{ }, { }, { }, { id, name, department, salary, experience, skills }] = employees

let [skill1, skill2, skill3] = skills

console.log(` Name : ${name} \n Department : ${department} \n Salary : ${salary}`)
console.log(` Skills : ${skill1},${skill2},${skill3}`)


console.log("10.Create a new employee array using the spread operator without directly modifying the original array")

let newEmployee4 = {
    id: 1111,
    name: "MUTHU",
    department: "IT",
    salary: 50000,
    experience: 1,
    skills: ["HTML", "CSS", "Java"]
}
let newEmployeesArray = [...employees, newEmployee4]
console.log(...newEmployeesArray)


console.log("11.Rest Operator")
function restOperator(employeeName, ...skills) {
    console.log("Name : " + employeeName)
    console.log("Skills : " + skills)
}
restOperator("Saravana Kumar", "HTML", "CSS", "JS", "React.js", "Node.js", "Express.js", "Mongodb")


console.log("12.Functions")
let newEmployee5 = {
    id: 1112,
    name: "MOHAN",
    department: "IT",
    salary: 45000,
    experience: 1,
    skills: ["HTML", "CSS", "Java"]
}

function add() {
    newEmployeesArray.push(newEmployee5)
    console.log(newEmployeesArray)
}
add()
function remove() {
    newEmployeesArray.pop()
}
remove()
function TotalsalaryCalculate() {
    let total = newEmployeesArray.reduce((a, v, i) => {
        return a += v.salary
    }, 0)
    console.log("Total : " + total)
}
TotalsalaryCalculate()

function showEmployee() {
    newEmployeesArray.forEach((v, i) => {
        console.log(v)
    })
}
showEmployee()

console.log("13.Conditional statements")
function salaryCategory() {
    let Junior = []
    let MidLevel = []
    let Senior = []
    newEmployeesArray.filter((v, i) => {
        if (v.salary > 0 && v.salary <= 30000) {
            Junior.push(v)
        }
        else if (v.salary >= 30001 && v.salary <= 60000) {
            MidLevel.push(v)
        }
        else if (v.salary > 60000) {
            Senior.push(v)
        }
    })
    console.log(`Junior Employees`)
    Junior.forEach((v) => {
        console.log("name : " + v.name, "Salary : " + v.salary)
    })
    console.log("Mid Level Employees")
    MidLevel.forEach((v) => {
        console.log("name : " + v.name, "Salary : " + v.salary)
    })
    console.log("Senior Employees")
    Senior.forEach((v) => {
        console.log("name : " + v.name, "Salary : " + v.salary)
    })
}
salaryCategory()

console.log("14.Date")

let joiningDate1 = employees.map((v) => {
    let months = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct", "nov", "dec"]
    let date1 = new Date(v.joiningDate)
    console.log("Name : " + v.name)
    console.log("Joining Year : " + date1.getFullYear())
    console.log("Joining Month : " + months[date1.getMonth()])
})






console.log("15.User Input")

let userId1 = Number(prompt("Enteryour Id Number"))

let searchEmpUsingId1 = employees.find((v, i) => {
    return v.id === userId
})
searchEmpUsingId1 ? console.log("name : "+searchEmpUsingId1.name,"Department : "+searchEmpUsingId1.department) : console.log("404 Not Found User")

// 1. Display All Employee
function displayEmployees() {

    if (employees.length === 0) {
        console.log("No employees found");
        return;
    }

    employees.forEach((employee) => {
        console.log(
            `ID: ${employee.id} | Name: ${employee.name} | Department: ${employee.department} | Salary: ₹${employee.salary}`
        );
    });
}


// 2. Add Employees
function addEmployee() {

    let id = Number(prompt("Enter Employee ID:"));
    let name = prompt("Enter Employee Name:");
    let department = prompt("Enter Department:");
    let salary = Number(prompt("Enter Salary:"));

    let employee = {
        id: id,
        name: name,
        department: department,
        salary: salary
    };

    employees.push(employee);

    console.log("Employee added successfully!");
}


// 3. Search Employees
function searchEmployee() {

    let name = prompt("Enter employee name to search:");

    let result = employees.find((employee) =>
        employee.name.toLowerCase() === name.toLowerCase()
    );

    if (result) {
        console.log("Employee Found:");
        console.log(result);
    } else {
        console.log("Employee not found");
    }
}


// 4. Filter High Salary Employee
function highSalaryEmployees() {

    let salary = Number(prompt("Enter minimum salary:"));

    let result = employees.filter((employee) =>
        employee.salary > salary
    );

    if (result.length === 0) {
        console.log("No employees found");
        return;
    }

    result.forEach((employee) => {
        console.log(
            `${employee.name} - ₹${employee.salary}`
        );
    });
}


// 5. Calculate Total Salary
function calculateTotalSalary() {

    let total = employees.reduce((total, employee) => {
        return total + employee.salary;
    }, 0);

    console.log("Total Salary: ₹" + total);
}


// 6. Sort By Salary
function sortBySalary() {

    let sortedEmployees = [...employees].sort((a, b) =>
        b.salary - a.salary
    );

    sortedEmployees.forEach((employee) => {
        console.log(
            `${employee.name} - ₹${employee.salary}`
        );
    });
}


// 7. Delete Employee
function deleteEmployee() {

    let id = Number(prompt("Enter Employee ID to delete:"));

    let index = employees.findIndex((employee) =>
        employee.id === id
    );

    if (index !== -1) {

        employees.splice(index, 1);

        console.log("Employee deleted successfully!");

    } else {

        console.log("Employee not found");

    }
}


// Menu
let choice;

do {
    choice = Number(prompt(`
     1. Display All Employees
     2. Add Employee
     3. Search Employee
     4. Filter High Salary Employees
     5. Calculate Total Salary
     6. Sort By Salary
     7. Delete Employee
     8. Exit

     Enter your choice:
`));

    switch (choice) {

        case 1:
            displayEmployees();
            break;

        case 2:
            addEmployee();
            break;

        case 3:
            searchEmployee();
            break;

        case 4:
            highSalaryEmployees();
            break;

        case 5:
            calculateTotalSalary();
            break;

        case 6:
            sortBySalary();
            break;

        case 7:
            deleteEmployee();
            break;

        case 8:
            console.log("Thank you! Program exited.");
            break;

        default:
            console.log("Invalid choice!");
    }

} while (choice !== 8);