const array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const string = 'Bobby';

const findMatching = (drivers, string) => {
let foundDrivers = drivers.filter(driver => {
  return driver.toLowerCase() === string.toLowerCase()
})
}



