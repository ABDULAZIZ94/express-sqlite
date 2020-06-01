function post_data (){
  const form = new FormData(document.getElementById('login-form'));
  console.table(form);
  fetch('/create', {
    method: 'POST',
    data: form
  });
  return resp.json(); 
}
async function fetch_data() {
  await fetch("/", {method:'POST'})
  .then(function(response) {
    response.text().then(t => $('#disp').html(t));
  })
}
async function fetch_hadith_row() {
  await fetch("/read/db")
  .then(function(response) {
    response.text().then(t => alert(t));
  })
}
async function fetch_hadith_row2() {
  await fetch("/read/db2",{ method:'POST'})
  .then(function(response) {
    const contentType = response.headers.get('content-type');
    console.log(contentType);//very usefull for debugging type
    return response.json();
  })
  .then(data => {
  console.log('Success:', data);
  $('#t1').html(array_obj_to_table(data));
  })
  .catch((error) => {
  console.error('Error:', error);
  });
}
function array_obj_to_table(data){
  table = "<table class='text-center col-sm-12'>";
  data.forEach(d => table+="<tr><td>"+d.hadith_text+"</td></tr>");
  table += "</table>";
  return table;
}
