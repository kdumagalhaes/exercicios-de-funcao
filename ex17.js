const increaseSalary = (plan, salary) => {
    const convertedPlan = plan.toLowerCase()
    switch (convertedPlan) {
        case "a":
            return salary * 1.1
        case "b":
            return salary * 1.15
        case "c":
            return salary * 1.2
        default:
            return "That's not a valid plan."
    }
}

console.log(increaseSalary('A', 1500))
console.log(increaseSalary('b', 1500))
console.log(increaseSalary('C', 1500))
