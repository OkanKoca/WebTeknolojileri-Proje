//TMDB API

const API_KEY = 'api_key=ddceaaf80e8a6017f8d8a30c7e8c2460';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

GetMovies(API_URL);

function GetMovies(url)
{
    fetch(url)
        .then(res => res.json()) 
        .then(data => {
            console.log(data);
            showMovies(data.results);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}

function showMovies(data)
{
    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = ''
    })
}


document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const feedback = document.getElementById("feedback");
    const form = document.getElementById("form");
    const jssubmit = document.getElementById("jssubmit");

    let isJSsubmitted = false;

    jssubmit.addEventListener("click", () =>{
        isJSsubmitted = true;
        JSdetection();
    })

    function JSdetection()
    {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            feedback.textContent = "";

            const name = document.getElementById("name");
            const surname = document.getElementById("surname");
            const nameFeedback = document.getElementById("name-surname-feedback");
            if(!name.value)
            {
                nameFeedback.textContent = "İsminizi yazınız!"
                return false;
            }
            if(!surname.value)
            {
                nameFeedback.textContent = "Soyisminizi yazınız!";
                return false;
            }

            if (!email.value) {
                feedback.textContent = "Email adresi giriniz!";
                return false;
            }
            if (!email.value.includes('@')) {
                feedback.textContent = "Geçersiz email formatı!";
                return false;
            }
            const allowedDomain = "gmail.com";
            const emailDomain = email.value.split('@')[1];
            if (emailDomain !== allowedDomain) {
                feedback.textContent = `Email adresi ${allowedDomain} domainine ait olmalıdır.`;
                return false;
            }
            const genderRadios = document.getElementsByName("cinsiyet");
            const genFeedback = document.getElementById("gender-feedback");
            let genderSelected = false;
            for (const radio of genderRadios) {
            if (radio.checked) {
                genderSelected = true;
                break;
            }
            }

            if (!genderSelected) {
                genFeedback.textContent = "Cinsiyet seçimi yapınız!";
                return false;
            }
            
            const checkbox = document.getElementById("checkbox");
            const checkboxFeedback = document.getElementById("checkbox-feedback");
            if(!checkbox.checked)
            {
                checkboxFeedback.textContent = "Kutuyu işaretlemediniz!";
                return false;
            }
            window.location.href = "index.html";
            return true;
            
            
        });
    }
        
            
    });
    
