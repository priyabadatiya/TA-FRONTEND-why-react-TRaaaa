let movie_list = document.querySelector('.movie_list');
let inputText = document.querySelector('input[type="text"]');

let allMovies = [];

inputText.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        allMovies.push({
            name: event.target.value,
            watched: false
        })
        event.target.value = "";
        createMovieUI();
    }
});

function deleteMovie(event) {
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
}

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI();
}

function elm(type, attr = {}, ...children) {
    let ele = document.createElement(type);
    for (let key in attr) {
        if (key.startsWith('data-')) {
            ele.setAttribute(key, attr[key]);
        } else if (key.startsWith('on')) {
            let eventName = key.slice(2);
            ele.addEventListener(eventName, attr[key]);
        } else {
            ele[key] = attr[key];
        }
    }

    children.forEach(child => {
        if (typeof child === "object") {
            ele.append(child);
        }
        if (typeof child === "string") {
            let node = document.createTextNode(child);
            ele.append(node);
        }
    });
    return ele;
}

function createMovieUI() {
    movie_list.innerHTML = "";

    allMovies.forEach((movie, i) => {

        let li = elm("li", {
                className: "flex justify-between my-2 w-full border-b-2 border-dashed border-black p-2 rounded"
            }, elm("label", {
                for: i,
                className: 'text-2xl'
            }, movie.name),
            elm("button", {
                id: i,
                className: 'bg-black text-white p-1',
                onclick: handleChange
            }, movie.watched ? "Watched" : "Not Watched"),
            elm("button", {
                id: i,
                className: "text-2xl font-bold text-red-600",
                onclick: deleteMovie
            }, "X"));
        movie_list.append(li);
    });
}
createMovieUI(allMovies);