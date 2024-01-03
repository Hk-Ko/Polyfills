//Promises in javascript
//Synchronous and Asynchronous code

//Sync

console.log("start");

console.log("Subscribe to Roadside Coder");

console.log("Finish");

//Async

console.log("begin");

setTimeout(() => {
  console.log("Sub to Roadside Coder");
}, 1000);

console.log("end");

//Callbacks

console.log("start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video}`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video}`);
    }, 1000);
  });
}

importantAction("Roadside Coder")
  .then((res) => {
    console.log(res);
    return likeTheVideo("Javascript Interview Questions");
  })
  .then((res) => {
    console.log(res);
    return shareTheVideo("Javascript Interview Questions");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

console.log("stop");

//Q1 - what is the output?

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

//Q3 - what is the output?

console.log("begin");

const fn = () =>
  new Promise((resolve, rejcect) => {
    console.log(1);
    resolve("success");
  });

console.log("middel");

fn().then((res) => {
  console.log(res);
});

console.log("stop");

//Q4 - what is the output?

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("Success1");
  })
  .then(function () {
    console.log("Success2");
  })
  .then(function () {
    console.log("Success3");
  })
  .catch(function () {
    console.log("error1");
  })
  .then(function () {
    console.log("Success4");
  });

//Q5 - what is the output

function job1(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise1 = job1(true);

promise1
  .then(function (data) {
    console.log(data);

    return job1(false);
  })
  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })
  .then(function (data) {
    console.log(data);

    return job1(true);
  })
  .catch(function (error) {
    console.log(error);
  });

//Q6 - what is the output?

//Q7 - Promise Chaining

const firstPromise = new Promise((resolve, reject) => {
  resolve("First!");
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));

//Q8 - Rewrite this example code using `async/await` instead of `.then/.catch`

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status === 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);

  //   return fetch(url).then((response) => {
  //     if (response.status === 200) {
  //       return response.json();
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   });
}

loadJson("https://fakeurl.com/no-such-user.json").catch((error) => {
  console.log(error);
});


//Q9 - Solve Promise Recursively


//Q10 - Promise Polyfill Implementation

