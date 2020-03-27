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
            <button class='addMovieButton' onclick="saveToWatchlist()">Add Movie!</button>
            </div>
        </div>
        `
    })
    
    return movieHTML.join('')
}

$(document).ready(init)
    
    function init () {
        
        document.getElementById("moviesContainer").innerHTML = renderMovies(movieData)
          }


  