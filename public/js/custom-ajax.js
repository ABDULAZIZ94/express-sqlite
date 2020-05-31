// postData = (path, input_id) => {
//   $.ajax({
//     url: path,
//     type: 'POST',
//     contentType: 'application/json',
//     data: JSON.stringify({
//         input_id: ($('#'+input_id).val())
//     }),
//     success: () => {
//         alert('success');
//     }
//   });
// }

// fetch('http://35.240.171.129/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(alert(data));

// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `response.json()` call
// });

// function fetch_data (){
//   console.log("fetching.....");
//   fetch("http://35.240.171.129/senario")
//   .then(response => {
//     const contentType = response.headers.get('content-type');
//     if (!contentType || !contentType.includes('application/json')) {
//       console.log(contentType);
//       console.log(response.text());
//       throw new TypeError("Oops, we haven't got JSON!");
//     }
//     return response.json();
//  })
//  .then(data => {
//      /* process your data further */
//  })
//  .catch(error => console.error(error));
// }

function fetch_data (){
  fetch("http://35.240.171.129/senario")
  .then(response => {
      const contentType = response.headers.get('content-type');
      console.log(contentType);
      response.text().then(t => $('#disp').html(t));
 })
 .then(data => {
     /* process your data further */
 })
 .catch(error => console.error(error));
}


// fetch_data = async ()=>{
//   await fetch("/senario")
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(responseJson) {
//      alert(responseJson.myString);
//   })
// }

// async function fetch_data(url = '/', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   console.log( response.json()); // parses JSON response into native JavaScript objects
// }