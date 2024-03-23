let multilineString = `
    The program estimates the cost of delivery depending on its weight and delivery method
`;

let weight = Number(prompt())
let status = prompt()

if (weight <= 5) {
    if (status === "express") {
        console.log("Delivery cost: 1000")
    } else if (status === "normal") {
        console.log("Delivery cost: 500")
    } else {
        console.log("Incorrect delivery status")
    }
} else {
    if (status === "express") {
        console.log("Delivery cost: 1500")
    } else if (status === "normal") {
        console.log("Delivery cost: 800")
    } else {
        console.log("Incorrect delivery status")
    }
}