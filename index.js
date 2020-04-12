// Code your solution here
const findMatching = (drivers, string) => {
let foundDrivers = 
drivers.filter(string => {
  return string === 'Bobby';
})
}

const findMatching = (drivers, string) => {
  let foundDrivers = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })
  return foundDrivers
}

