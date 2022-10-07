fetch("https://asli-fun-fact-api.herokuapp.com/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });