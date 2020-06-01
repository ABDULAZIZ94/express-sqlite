function post_data (form){
  // const form = new FormData(document.getElementById('f1'));
  // let form = $('#f1');
  // console.table(form);
  $.ajax({
    method: "POST",
    url: "/create",
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    data: form//{ table_name: "HADITH" } //use data not body
  })
}
function post_any_data (url, [...form]){
  // const form = new FormData(document.getElementById('f1'));
  // let form = $('#f1');
  // console.table(form);
  $.ajax({
    method: "POST",
    url: url,
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    data: form//{ table_name: "HADITH" } //use data not body
  })
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
