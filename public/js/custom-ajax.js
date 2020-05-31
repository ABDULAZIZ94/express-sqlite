postData = (path, input_id) => {
  $.ajax({
    url: path,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        input_id: ($('#'+input_id).val())
    }),
    success: () => {
        alert('success');
    }
  });
}