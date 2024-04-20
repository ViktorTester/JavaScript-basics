let multilineString = `
    There is an array cities containing the names of cities. The program asks
    the user for the name of the city and checks whether such a city exists in
    the cities array. If a city is found, the program displays a list of cities
    starting with the same letter as the user-entered city in the stated format.

    If the city is not found, the program displays a message stating that the city is not in the list.
`;

const cities = ["Moscow", "St. Petersburg", "Saratov", "Magadan", "Yaroslavl", "Samara", "Yakutsk"];

let town = prompt();

if (cities.includes(town)) {
    newCities = cities.filter((x) => x.startsWith(town[0]))
    console.log(`Cities starting with "${town[0]}": ${newCities.join(', ')}`)
} else {
    console.log('This city is not in the list')
}