//general function
function post_any_data (url, [...form]){
  $.ajax({
    method: "POST",
    url: url,
    contentType:'application/x-www-form-urlencoded; charset=UTF-8',
    data: form//{ table_name: "HADITH" } //use data not body
  })
}
//specific function
function post_form1(){
  var form_data = $('#form1').serializeArray();
  // console.log(form_data);
  post_any_data('/create/createtable', form_data);
}
function post_form2(){
  var form_data = $('#form2').serializeArray();
  // console.log(form_data);
  post_any_data('/create/insertrow', form_data);
}


