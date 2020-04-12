const array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const string = 'Bobby';

function findMatching(array, driver) {
    return array.filter( d => {
        return d.toLowerCase() == driver.toLowerCase()
    }) 
}




