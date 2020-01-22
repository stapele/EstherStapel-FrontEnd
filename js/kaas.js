/*bron: https://codepen.io/KoopReynders/pen/xyReLB*/



var zoekveld = document.querySelector('header form');
var zoekbutton = document.querySelector('header button');


zoekbutton.addEventListener("click", function () {
    zoekveld.classList.toggle('show-search');
});