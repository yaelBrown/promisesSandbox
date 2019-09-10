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