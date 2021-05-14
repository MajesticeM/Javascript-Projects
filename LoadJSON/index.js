
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=84ca8003e49fe6794996b19aba7c1700', true)

request.onload = function () {
  // Begin accessing JSON data here
  console.log(this.response);
}

// Send request
request.send()