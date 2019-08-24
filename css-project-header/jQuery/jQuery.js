
let button = $(".btn")[0]
let catPhoto = $(".catmeme")[0]

button.value = "Woot!"
console.log(button)

button.addEventListener("click", function () {
    $.getJSON("http://aws.random.cat/meow").done(function (json) {
        console.log(json.file)
        catPhoto.src = json.file
    }).fail(function () {
        alert("Yo something went wrong.")
    })
})