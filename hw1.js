const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) {
        return console.error(err);
        throw err;
    }
    console.log("Directory 'main','online' created successfully ")
})
fs.mkdir(path.join(__dirname, 'main', 'inPersone'), {recursive: true}, (err) => {
    if (err) {
        return console.error(err);
        throw err;
    }
    console.log("Directory 'inPersone' created successfully ")
})

const onlineUsers = [{name: 'Misha', age: 26, city: 'Lviv'}, {name: 'Andrii', age: 13, city: 'Kirovohrad'}, {
    name: 'Yarko',
    age: 18,
    city: 'Kyiv'
}];

const inPersonUsers = [{name: 'Alina', age: 22, city: 'Dnepr'}, {name: 'Olia', age: 30, city: 'Styi'}, {
    name: 'Ira',
    age: 23,
    city: 'Bukovel'
}];


fs.writeFile(path.join(__dirname, 'main', 'online', 'users.txt'), '', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("File 1 created successfully ")
});


fs.writeFile(path.join(__dirname, 'main', 'inPersone', 'person_users.txt'), '', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("File 2 created successfully ")
});

for (let i = 0; i < onlineUsers.length; i++) {
    fs.appendFile(path.join(__dirname, 'main', 'online', 'users.txt'), `Name:${onlineUsers[i].name} \n Age:${onlineUsers[i].age} \n City:${onlineUsers[i].city} \n\n `, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

for (let i = 0; i < inPersonUsers.length; i++) {
    fs.appendFile(path.join(__dirname, 'main', 'inPersone', 'person_users.txt'), `Name:${inPersonUsers[i].name} \n Age:${inPersonUsers[i].age} \n City:${inPersonUsers[i].city} \n\n `, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

// function changeUsers() {

// fs.readFile(path.join(__dirname, 'main', 'online', 'users.txt'), (err, data) => {
//      if (err) {
//          console.log(err);
//          throw err;
//      }

//     fs.appendFile(path.join(__dirname, 'main', 'inPersone', 'person_users.txt'), data,{flag:'w'} ,err => {
//         }
//     )
//  })

// fs.rename(path.join(__dirname, 'main', 'online', 'users.txt'), path.join(__dirname, 'main', 'inPersone', 'person_users.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
// })

// fs.rename(path.join(__dirname, 'main', 'inPersone', 'person_users.txt'), path.join(__dirname, 'main','online', 'users.txt' ), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
// })

//
// }
//
// changeUsers();