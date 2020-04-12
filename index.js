const array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const string = 'Bobby';

function findMatching(drivers, string){
  return drivers.filter(e => {
    return e.toLowerCase() === string.toLowerCase()
  })
}
}




