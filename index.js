// $(document).ready(function () {
//     document.getElementById('myForm').addEventListener('submit', eventFunction)
// })

// function eventFunction (evt) {
//     evt.preventDefault();
// }



// function renderAllMovies (movieArray) {
//     var movieHTML = movieArray.map(renderOneMovie)

// }


// function renderOneMovie (theMovie) {
//     return `
//             <div class="poster">
//             <img src="${theMovie.Poster}"
//             </div>
//             <div class="Title">${theMovie.Title}</div>
//             <div class="Release-date">${theMovie.Year}</div>
//             <button class="button">Add</div>
//         `
// }
$(document).ready(init)
    
    function init () {
        
        document.getElementById("moviesContainer").innerHTML = renderMovies(movieData)
          }


function renderMovies (movieArray) {
    var movieHTML = movieArray.map(function (currentMovie) {
        return `
        <div class="movie">    
        <div class='poster'>
            <img src='${currentMovie.Poster}'>
            </div>
            <div class='title'>
            <p>${currentMovie.Title}</p>
            </div>
            <div class='releaseDate'>
            <p>${currentMovie.Year}
            </div>
            <div class='button'>
            <button class='addButtonClick' onclick="saveToWatchlist(${currentMovie.imdbID})">Add Movie!</button>
            </div>
        </div>
        `
        function saveToWatchlist (imdbID) {
            const movie = movieData.find(function (currentMovie) {
                return currentMovie.imdbID == imdbID;
            });
            const watchlistJSON = localStorage.getItem('watchlist');
            const watchlist = JSON.parse(watchlistJSON);

            if (watchlist = null) {
                return watchlist = []
            }
            watchlist.push(movie);
            watchlistJSON = JSON.stringify(watchlist);
            localStorage.setItem('watchlist', watchlistJSON);
        }
    })
    
    return movieHTML.join('')
}



  