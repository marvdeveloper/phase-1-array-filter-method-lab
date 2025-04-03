// Code your solution here
// Function to find matching driver names (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the given string (case-insensitive)
  function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
  }
  
  // Function to find driver objects whose 'name' property matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example usage:
  
  const drivers = [
    'Sally', 'Alice', 'Bob', 'Sam', 'sally', 'Bobby'
  ];
  
  const driverObjects = [
    { name: 'Sally', hometown: 'New York' },
    { name: 'Alice', hometown: 'Boston' },
    { name: 'Bob', hometown: 'Chicago' },
    { name: 'Sam', hometown: 'Denver' }
  ];
  
  console.log(findMatching(drivers, 'sally')); // Output: ['Sally', 'sally']
  console.log(fuzzyMatch(drivers, 'Sa'));     // Output: ['Sally', 'Sam', 'sally']
  console.log(matchName(driverObjects, 'Sally')); // Output: [{ name: 'Sally', hometown: 'New York' }]
  