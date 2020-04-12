let drivers = [{
    "name": "tom"
  },
  {
    "name": "bobby"
  },
  {
    "name": "mike"
  },
  {
    "name": "jeremy"
  },
  {
    "name": "richard"
  },
]

const findMatching = (drivers, string) => {
let foundDrivers = drivers.filter(driver => {
  return driver.toLowerCase() === string.toLowerCase()
})
}



