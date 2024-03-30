let multilineString = `
    A 'trip' object has been created with information about the trip.
    The program asks the user to enter the following travel information:

    Destination.
    Travel start date.
    Duration of the trip (in days).

    The program then uses this object to display travel information.
`;

let country = prompt();
let date = prompt();
let trip_len = prompt();
let trip = {
    country,
    date,
    trip_len
};

console.log(`${trip.date} you are going to ${trip.country} for ${trip.trip_len} days`)