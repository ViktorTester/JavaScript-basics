let multilineString = `
    The program asks the user for the base area S and height h, then allows you
    to choose for which figure to find the volume: for a cylinder or
    for a cone, and then displays the volume of the selected figure

`;

let S = Number(prompt());
let h = Number(prompt());
let figure = prompt();

let calculateCylinderVolume = (base, height) => {
    return base * height;
}

let calculateConeVolume = (base, height) => {
    return 1 / 3 * base * height;
}

if (figure === 'cylinder') {
    console.log(`Cylinder volume: ${calculateCylinderVolume(S, h)}`)
} else {
    console.log(`Cone Volume: ${calculateConeVolume(S, h)}`)
}