import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();
export {firebase, database as default};

// //child removed
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// })
// //child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// //child added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

//Setting up expenses
// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses=[];
//     snapshot.forEach(element => {
//         expenses.push({
//             id: element.key,
//             ...element.val()
//         })
//     });
//     console.log(expenses);
// })
// .catch((err)=>console.log('error occured '+err));

//by on methon means by creating the subscription
//it is necessary to call .off to turn off the subscription
// database.ref('expenses')
//     .on('value',(snapshot) => {
//         const expenses = [];
//         snapshot.forEach(element => {
//             expenses.push({
//                 id: element.key,
//                 ...element.val()
//             })
//         });
//         console.log(expenses);
//     }, (e) => {
//         console.log('Error Occured', e);
//     });

//for printing some value form the firebase refrence
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const value = snapshot.val()
//     console.log(`${value.name.first} is a ${value.job.profile} at ${value.job.comapany}`);
// }, (e) => {
//     console.log('Error Occured', e);
// });

//for pushing some values into the firebase refernce
// database.ref('expenses').push({
//     description:'Chai',
//     amount:11,
//     note:'',
//     createdAt:12315
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 11231,
//     note: 'rent of the month ',
//     createdAt: 1152315
// });
// database.ref('expenses').push({
//     description: 'Weed',
//     amount: 1231,
//     note: 'something to add here',
//     createdAt: 1852315
// });

//another example of pushing
// database.ref('notes').push({
//     title:'To Learn',
//     body:'React, Nodejs, python, ReactNative'
// });

//example about removing the values
// database.ref('notes/-L66sLMaAQiU5fFJI_5p').remove()
    
//another example of subscription
// const onValueChange=database.ref().on('value', (snapshot)=>{
//     const value=snapshot.val()
//     console.log(`${value.name.first} is a ${value.job.profile} at ${value.job.comapany}`);
// },(e)=>{
//     console.log('Error Occured',e);
// })
//     setTimeout(()=>{
//         database.ref('job/comapany').set('Microsoft');
//     },5000);

//     setTimeout(() => {
//         database.ref().off('value',onValueChange);
//     }, 7000);

//     setTimeout(() => {
//         database.ref('job/comapany').set('Microsoft')
//     }, 10500);

//by using once for fatching database values
// database.ref('location')
// .once('value')
// .then((snapshot)=>{
//     const val=snapshot.val();
//     console.log(val);
// })
// .catch((e)=>console.log('error occured',e));

// //Database Creation 
// database.ref().set({
//     name: 'Ujwal Arak',
//     age: 22,
//     isSingle: false,
//     location: {
//         city: 'Mumbai',
//         country: 'India'
//     },
//     job: {
//         stresslevel: 6,
//         comapany: 'MicroSoft'
//     }
// }).then(() => {
//     console.log('Database has been created');
// }).catch((error) => {
//     console.log('Something got wrong', error);
// })

// //Update Database by set
// database.ref('age').set(21);
// database.ref('location/city').set('Pune');
// database.ref('attributes').set({
//     height: 5.7,
//     weight: 60
// }).then(() => {
//     console.log('Database has been created');
// }).catch((error) => {
//     console.log('Something got wrong', error);
// });

//native way of updating the database
// database.ref('name').update({ first: 'Ujwal', last: 'Arak' })

// //updating all the values
// database.ref().update({
//     'location/city': 'Mumbai',
//     job: {
//         stresslevel: 9,
//         comapany: 'Google',
//         profile: 'fullstack developer'
//     }
// }).then(()=>{
//     console.log('sucessfully updated');
// }).catch((err)=>{
//     console.log('some error occured '+err);
// })

//Remove Database
// database.ref().set(null);
//OR use the native remove method as follows
// database.ref().remove()
//     .then(function () {
//         console.log("Remove succeeded.")
//     })
//     .catch(function (error) {
//         console.log("Remove failed: " + error.message)
//     });
//console.log('changes which have made into the firebase');