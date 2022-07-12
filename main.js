let MOVIE_INPUT = document.getElementById('movie_input');
let SEARCH_BTN = document.querySelector('.search_btn');
let CARDS = document.querySelector('.card-wrapper');

async function loadMovies(name) {
    const url = `https://www.omdbapi.com/?s=${name}&page=1&apikey=d364836c`;
    const result = await fetch(`${url}`);
    const data = await result.json();
    console.log(data)
    displayMovies(data.Search);
}

function findMovies() {
    let search = MOVIE_INPUT.value.trim();
    loadMovies(search);
}

SEARCH_BTN.addEventListener('click', () => {
    findMovies();
});

function displayMovies(movies) {
    CARDS.innerHTML = '';
    for (let i = 0; i < movies.length; i++) {
        let movieCard = document.createElement('div');
        movieCard.classList.add('card');
        movieCard.innerHTML = `
        <div class="movie-img">
            <img class="image" src="${movies[i].Poster}">
        </div>
        <h3 class="movie-name">${movies[i].Title}</h3>
        <p class="type">${movies[i].Type}</p>
        <p class="year">${movies[i].Year}</p>
`;
        CARDS.appendChild(movieCard);
    }
}