//TMDB API

const API_KEY = 'api_key=ddceaaf80e8a6017f8d8a30c7e8c2460';
const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY + '&query=';
const myRates = [10 , 9, 10, 8, 8, 8, 8.5, 8, 9, 10, 8, 8, 8.5, 8, 8];

function searchMovies(queries, customRatings) {
    const promises = queries.map(query => {
        const url = SEARCH_URL + encodeURIComponent(query);
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const movie = data.results.find(movie => movie.title.toLowerCase() === query.toLowerCase());
                return movie || null;
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                return null;
            });
    });

    Promise.all(promises).then(movies => {
        const validMovies = movies.filter(movie => movie !== null);
        if (validMovies.length > 0) {
            showMovies(validMovies, customRatings);
        } else {
            console.error('No movies found');
        }
    });
}

function showMovies(movies, ratings) {
    const container = document.getElementById('movie-container');
    container.innerHTML = ''; 

    movies.forEach((movie, index) => {
        const { title, poster_path, vote_average } = movie;
        const formattedVoteAverage = vote_average.toFixed(1); 
        const movieEl = document.createElement('div');
        const customRating = ratings[index]
        movieEl.classList.add('movie');
        
        movieEl.innerHTML = `
            <div class="img-container">
                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
            </div>
            <div class="movie-info">
                <h3 style = "font-weight: 700;">${title}</h3>
                <div class = "ratings">
                    <span class="rating"> TMDB : <strong>${formattedVoteAverage}</strong></span> <br>
                    <span> Benim Puanım: <strong>${customRating}</strong> </span>
                </div>
            </div>
        `;

        container.appendChild(movieEl);
    });
}

searchMovies(['Inception', 'Interstellar', 'The Prestige', 'The Man From Earth', 'The Banshees of Inisherin'
    ,'The Wonderful Story Of Henry Sugar', 'Shutter Island', 'Memento', 'A Beatiful Mind', 'American Psycho', 
    'V for Vendetta', 'Arrival', 'se7en', 'Hereditary', 'Get Out', 'The Pianist'
], myRates);



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

            const textarea = document.getElementById("textarea");
            const textFeedback = document.getElementById("text-feedback");
            if(!textarea.value)
            {
                textFeedback.textContent = "Mesajınızı yazınız!";
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
    
