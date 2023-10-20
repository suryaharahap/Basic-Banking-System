const createPerson = function (person) {
  fs.writeFileSync('./person.json', JSON.stringify(person));
  return person;
};

const Surya = createPerson({
  name: 'Surya Harahap',
  age: 23,
  address: 'Bandung',
});
