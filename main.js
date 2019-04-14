const submitLink = "http://3.8.146.17/donate/";
$("#donation-form").submit(function(event) {
  event.preventDefault();
  let formData = $(this).serializeArray();
  console.log(formData);

  let jsonObject = {};
  for (let i = 0; i < formData.length; i++) {
    let key = formData[i].name;
    jsonObject[key] = Number(formData[i].value);
  }
  console.log(jsonObject);

  // 2.Setting the ajax request
  $.ajax({
    type: "POST",
    headers: {
      Authorization: "xxxxxxxxxxxxx",
      "Content-Type": "application/json; charset=utf-8"
    },
    url: submitLink,
    dataType: "json",
    data: JSON.stringify(jsonObject),
    success: function() {
      console.log("Your donation is submitted successfully!");
    },
    error: function(error) {
      console.log(error);
    }
  });
});
