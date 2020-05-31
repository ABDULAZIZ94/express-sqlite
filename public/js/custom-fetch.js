function post_data (data){
  fetch("/create", {
    method:'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data
  })
  .then(response => {
      const contentType = response.headers.get('content-type');
      console.log(contentType);
      response.text().then(t => alert(t));
      // response.text().then(t => $('#disp').html(t));
 })
 .then(data => {
     /* process your data further */
 })
 .catch(error => console.error(error));
}

async function fetch_data() {
  await fetch("/", {method:'POST'})
  .then(function(response) {
    response.text().then(t => $('#disp').html(t));
  })
 
}
