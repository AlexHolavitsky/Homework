

// Дізнатись суму всіх зарплат користувачів:
// let company = {
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
//     development: {
//         web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
//         internals: [{name: 'Jack', salary: 1300}]
//     },

// };
// Об'єкт може містити невідому кількість департаментів та співробітників


let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    },

};

function getTotalSalaries(department) {
    if (Array.isArray(department)) {        
        return department.reduce((sum, employee) => sum + employee.salary, 0);
    } else {        
        let total = 0;
        for (let subdep of Object.values(department)) {
            total += getTotalSalaries(subdep);
        }
        return total;
    }
}

console.log(getTotalSalaries(company)); 