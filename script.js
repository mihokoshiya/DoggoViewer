const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const breedSelect = document.getElementById('breed');

fetch(BREEDS_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            breedSelect.appendChild(option);
        }
    })

    breedSelect.addEventListener('change', function(e) {
        let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`

        getDoggo(url);
    })

const main = document.getElementById('main');
const loader = document.getElementById('loader');


function getDoggo (url) {
    loader.classList.add('show');
    main.classList.remove('show');
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            main.src = data.message;
        })
}

main.addEventListener ('load', function () {
    loader.classList.remove('show');
    main.classList.add('show');
})