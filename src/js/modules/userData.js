function userData() {
    let person = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    }
  
    let serializedPerson = JSON.stringify(person);
    localStorage.setItem('Alex', serializedPerson);
  
    console.log(JSON.parse(localStorage.getItem('Alex')));
};

module.exports = userData;