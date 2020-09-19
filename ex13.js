const businessDay = day => {
    switch (day) {
        case 1:
        case 7:
            return "Weekend!"

        case 2:
        case 3:
        case 4: 
        case 5:
        case 6:
            return "Business day!"
        default:
            return "Invalid day!";
    }
}

console.log(businessDay(7))