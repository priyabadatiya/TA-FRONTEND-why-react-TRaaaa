let movie_list = document.querySelector('.movie_list');
let inputText = document.querySelector('input[type="text"]');

let allMovies = [];

inputText.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        allMovies.push({
            name: e.target.value,
            watched: false
        })
        e.target.value = "";
        createMovieUI();
    }
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
}

function handleChange(event) {
    console.dir(event.target);
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI();
}

let elm = React.createElement;

function createMovieUI() {


    let movies = allMovies.map((movie, i) => {

        let li = elm("li", {
                className: "flex justify-between my-2 w-full border-b-2 border-dashed border-black p-2 rounded"
            }, elm("label", {
                id: i,
                className: 'text-2xl'
            }, movie.name),
            elm("button", {
                id: i,
                className: 'bg-white text-purple p-1',
                onClick: handleChange
            }, movie.watched ? "Watched" : "Not Watched"),
            elm("button", {
                "id": i,
                className: "text-2xl font-bold text-red-500",
                onClick: deleteMovie
            }, "X"));

        return li;
    });

    ReactDOM.render(movies, movie_list);

}