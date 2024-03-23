let multilineString = `
  The program evaluates whether the user has achieved the goal.
  The program receives 2 numbers as input - planned tasks and completed tasks.
`;

let madeTasks = Number(prompt())
let initialTasks = Number(prompt())
let result = (madeTasks >= initialTasks) ? "Goal achieved" : "Goal not achieved";

console.log(result)