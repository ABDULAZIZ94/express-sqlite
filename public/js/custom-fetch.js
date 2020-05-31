function post_data (data){
  fetch("/create", {
    method:'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data
  })
  .then(response => {
      return response.text();
  })
  .then(t => {
      alert('replied: '+t);
  })
  .catch(error => console.error(error));
}

async function fetch_data() {
  await fetch("/", {method:'POST'})
  .then(function(response) {
    response.text().then(t => $('#disp').html(t));
  })
}
