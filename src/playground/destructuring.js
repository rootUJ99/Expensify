//Object destructuring //
const person={
    name: 'Ujwal',
    age:21,
    location:{
        city:'Mumbai',
        temprature:28
    }
};
const {name,age}=person;
const { city, temprature:temp}=person.location;
console.log(`Hello my name is ${name} and age is ${age}`);
console.log(`And i live in ${city} where temprature is ${temp}`);

const book={
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguine'
    }
};
const {name:publisherName='Self-Published'}=book.publisher;
console.log(`${publisherName}`)

//Array Destucturing//
const address=['Damunagar chavan chawl','Kandivali East',,'400101'];
const [,,city='Pune',zip]=address;
console.log(address);
console.log(`i live in the city ${city}`);

const item=['Coffee(hot)','$2.00','$3.00','$4.00'];
const [coffee, ,medium, ]=item;
console.log(`A medium coffee ${coffee} in ${medium}`);