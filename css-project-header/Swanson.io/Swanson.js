
// var axios = require("axios");

let axiosButton = $("#Axios")[0]
let quoteLabel = $("#quote")[0]

console.log(axiosButton)

axiosButton.addEventListener("click", function() {
    axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function(response) {
        console.log(response.data)
        quoteLabel.innerHTML = response.data[0];
    })
    .catch(function(err){
        console.log(err)
    })
})

let XHRButton = $("#XHR")[0]
XHRButton.addEventListener("click", function(){
    let XHR = new XMLHttpRequest()
    XHR.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    XHR.onreadystatechange = function(response) {
        if(XHR.readyState == 4 && XHR.status == 200) {
            let json = JSON.parse(XHR.responseText);
            quoteLabel.innerHTML = json[0]
        }
    }
    XHR.send()
})

let fetchButton = $("#Fetch")[0]
fetchButton.addEventListener("click", function(){
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(function(json){
        return json.json()
    }).then(function(object) {
        quoteLabel.innerHTML = object[0];
    })
})

let jQueryButton = $("#jQuery")[0]
jQueryButton.addEventListener("click", function(){
    $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .done(function(json) {
        quoteLabel.innerHTML = json[0];
    })
    .fail(function(){
        console.log("Failure")
    })
});