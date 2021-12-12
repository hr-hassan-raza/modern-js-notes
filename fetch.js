// fetch api

// 1) fetch data 2) resonse object contains methods 3) call respose.json which returns promise

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json(); // this is promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
// async and wait // chain promise in clean manner

// async function always returns promise

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log("rejected", err.message);
  });
