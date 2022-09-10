let dog_image = document.getElementById("dog-image")
const image_url = `https://dog.ceo/api/breeds/image/random`

//Fetch Dog Image
fetch(image_url).then((response) => response.json())
    .then((data) => {
        let img = data['message']
        dog_image.src = img
    })