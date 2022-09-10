let dog_image = document.getElementById("dog-image")
const image_url = `https://dog.ceo/api/breeds/image/random`
const predict_btn = document.querySelector("#predict_btn")
const popup = document.getElementById("open")
const close_btn = document.getElementById("close")
let user_input = document.getElementById("name")
let gender = document.querySelector(".gender")
let age = document.querySelector(".age")

//Fetch Dog Image
fetch(image_url).then((response) => response.json())
    .then((data) => {
        let img = data['message']
        dog_image.src = img
    })

const start_predict = () => {
    let username = user_input.value
    // API Urls
    let gender_url = `https://api.genderize.io/?name=${username}`;
    let age_url = `https://api.agify.io/?name=${username}`;
    
    //Fetch gender
    fetch(gender_url).then((response) => response.json())
        .then((data) => {
            gender.innerHTML = data['gender'].charAt(0).toUpperCase() + data['gender'].slice(1);
        })
    //Fetch age
    fetch(age_url).then((response) => response.json())
        .then((data) => {
            age.innerHTML = data['age']
        })
}

// Open PopUp to Display the Results
const openPopup = () => {
    popup.classList.add('open-popup')
    start_predict()
}

// Open PopUp
const closePopup = () => {
    popup.classList.remove('open-popup')
}

predict_btn.addEventListener('click', openPopup)
close_btn.addEventListener('click', closePopup)