//Getting all variables
const activePoem = document.getElementsByClassName('grid_item')
const showPoem = document.getElementsByClassName('active_poem_item')

//if poem clicked
activePoem.onClick = ()=>{
    showPoem.classList.add('active_poem_item_on')
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


