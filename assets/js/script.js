const remove = document.querySelector('.grid_section');
remove.addEventListener('click', removeClass);

function removeClass() {
    remove.classList.remove('grid_section')
}

// functions to call other pages
function home() {
    window.location.href = "index.html"
}
function aboutUs() {
    window.location.href = "about_us.html"
}
function myStory() {
    window.location.href = "my_story.html"
}
function poems() {
    window.location.href = "poems.html"
}


