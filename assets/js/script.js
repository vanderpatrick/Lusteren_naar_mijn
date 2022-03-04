

const previewPoem = document.querySelector('.poem');
const poem = document.querySelector('.poem_big')
previewPoem.addEventListener('click', changeCss);

function changeCss() {
    previewPoem.classList.replace('poem','poem_big')
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


