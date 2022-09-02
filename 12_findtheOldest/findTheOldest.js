const findTheOldest = (persons) => {
    const getPersonAge = (person) => {
      if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
      }
        return new Date().getFullYear() - person.yearOfBirth;
    }
   
     const personsWithAge = persons.map((person)=> {
       return {
         ...person,
         age: getPersonAge(person),
       }
})
     const maxAge = Math.max(...personsWithAge.map((person) => {
       return person.age
     }))

     const personWithBiggestAge = personsWithAge.find(person => person.age === maxAge);

    return personWithBiggestAge;


};

// Do not edit below this line
module.exports = findTheOldest;