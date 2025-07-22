


// let firstName1 = 'Hammad';
// let lastName1 = "";

// setTimeout(() => {
//     lastName1 = 'Khanzada';
// },2000);

// console.log(firstName1 + ' ' + lastName1); // Output: Hammad Khanzada after 2 seconds




// the above code is an example of asynchronous behavior but problem is k not waiting 2 ms ok 
//   this issue is solved by using Promises and async/await in JavaScript


//   First Way Problem solving using Promises

// let firstName = 'Hammad';
// let lastName = "";

// const setLastName = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         lastName = 'Khanzada'; 
//         resolve();
//     }, 2000);
//     })

// setLastName.then(() => {
//     console.log(firstName + ' ' + lastName); // Output: Hammad Khanzada after 2 seconds
// })

//   Second Way Problem solving using Promises


let firstName = 'Abid';
let lastName = "";


const setLastName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastName = 'Mirza';
            resolve();
        }, 2000);
    });
}


const displayFullName = async () => {
    await setLastName();
    console.log(firstName + ' ' + lastName); // Output: Abid Mirza after 2 seconds
}


displayFullName();
