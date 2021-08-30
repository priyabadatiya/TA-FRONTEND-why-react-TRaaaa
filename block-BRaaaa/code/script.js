let movieInput = document.querySelector('.input');
let list = document.querySelector('.movie_list');

let allMovies = [];

movieInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false
        });
        createUI(allMovies);
        event.target.value = '';
    }
})

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createUI(allMovies);
}

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createUI(allMovies);
}

function createUI(allMovies) {
    list.innerHTML = '';
    allMovies.forEach((movie, ele) => {

        let li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'my-4', 'w-custom');
        let movieName = document.createElement('label');
        movieName.for = ele;
        movieName.innerText = movie.name;
        let check = document.createElement('input');
        check.type = "checkbox";
        check.id = ele;
        check.checked = movie.watched;
        check.addEventListener("change", handleChange);
        let close = document.createElement('span');
        close.innerText = "X";
        close.classList.add("cursor-pointer");
        close.setAttribute('data-id', i);
        close.addEventListener('click', deleteMovie);
        li.append(check, movieName, close);
        list.append(li);
    })
}
createUI(allMovies);