const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

const samePerson = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

Object.freeze(clone1);
Object.freeze(clone2);

samePerson.name = person.name;
samePerson.age = person.age;
samePerson.country = person.name;


