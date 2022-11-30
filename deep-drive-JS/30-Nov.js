// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
//   getRestaurants(position, restaurants => {
//     console.log(restaurants);
//     console.log('done');
//   })
// });

// setTimeout()
// addEventlistener()

// {states of promise}
//pending
// fulfilled
// rejected

navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
});

const promise = new Promise((resolve, reject) => { 
  // setTimeout(() => reject(Error('Promise failed.')), 1000);
  navigator.geolocation.getCurrentPosition(position => {
  resolve(position);
  }, error => {
    reject(error);
  });
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log('done'));
// promise.then(() => console.log('success')).catch(() => console.log('failure'));
// promise
//   .then(value => console.log(value))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));