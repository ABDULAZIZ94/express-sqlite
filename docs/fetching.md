# handling response.text()
simple

    async function fetch_data() {
      await fetch("/", {method:'POST'})
      .then(function(response) {
        response.text().then(t => $('#disp').html(t));
      })
    }    


    response.text().then(t => alert(t)); // displ to alert()
    response.text().then(t => $('#disp').html(t)); //write changes to div

complex

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
          return response.text();
      })
      .then(t => {
          alert('replied: '+t);
      })
      .catch(error => console.error(error));
    }

# debug
check content type

  const contentType = response.headers.get('content-type');
  console.log(contentType);