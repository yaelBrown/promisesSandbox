'use strict';

const wait = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, num);
  });
};

wait(1000).then(() => console.log("you see this after 1 second"));
wait(3000).then(() => console.log("you see this after 3 second"));


const myFirstPromise = new Promise((resolve, reject) => {
  // resolve();
  // reject();
});







// get starwars information (only works in browser)

let starWars = "";

let fetchStarWarsInfo = () => {
  fetch('https://swapi.co/api/people/1').then(res => res.json()).then((json) => {
    // starWars = json;
    console.log(json);
  });
};

// fetchStarWarsInfo();






// github fetch exercise
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
let ghData;

// const dateOfLastCommit = (usr) => {
//   (usr == undefined) ? console.log("enter a username") : "";
  
//   // fetch gh data and add to variable
//   const ghFetch = () => {
//     fetch(`https://api.github.com/users/${usr}/events`, {
//       headers: {
//         'Authorization': githubToken
//       }
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         ghData = json;
//         // console.log(json);
//       });
//   }

//   // call ghFetch
//   // ghFetch();

//   // declare variable for filtered data
//   let ghDataFiltered = []; 

//   // filter github data and push it to ghDataFiltered array
//   const filterGHdata = () => {
//     ghData.forEach((e) => {
//       if (e.type == "CommitCommentEvent" || e.type == "PushEvent") {
//         ghDataFiltered.push(e);
//       }
//     });
//   };

//   // run filter data 2 seconds after data was retrieved (prevents undefined)
//   // setTimeout(filterGHdata, 2000);
//   // setTimeout(() => {
//   //   console.log(ghDataFiltered);
//   // }, 2000);

//   // Return date of last commit from filtered array
//   const getDateOfLastCommit = () => {
//     return ghDataFiltered[0].created_at;
//   };

//   // Return promise of date
//   return ghFetch().then(() => filterGHdata()).then(() => getDataOfLastCommit());
// };


let userName = "yaelBrown"
// let date = dateOfLastCommit(userName);

// console.log(dateOfLastCommit(userName));

// dateOfLastCommit();     // Should return a comment in console to return username









// Revised solutiion
let time = "";

const secondDateOfLastCommit = (usr) => {
  return fetch(`https://api.github.com/users/${usr}/events`, {
    headers: {
      'Authorization': githubToken
    }
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      ghData = json;
    })
    .then(() => {
      console.log(ghData[0].created_at);
      time = ghData[0].created_at;
      time = new Date(time);
      return ghData[0].created_at;
    });
}

secondDateOfLastCommit(userName);


// print info to page. 
let lastEvt = document.getElementById("lastEvt");

setTimeout(() => {
  lastEvt.textContent = `${userName} last commit event was ${time}`;
}, 1000);