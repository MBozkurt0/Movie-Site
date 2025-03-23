const arrows = document.querySelectorAll(".arrows")
const movieList = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    console.log(Math.floor(window.innerWidth / 300))
    let clickCounter = 0;
    const imageItem = movieList[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter ++;
        if(imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0){
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value - 350
            }px)`;
        } else{
            movieList[i].style.transform ="translate(0)"
            clickCounter = 0
        }
    });
});


/* dark  mode*/
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".main-container,.navbar,.sidebar,.sidebar-wrapper i,.toggle-wrapper,.toggle-ball,.movie-filter select,.movie-list-slider h1"); 
 ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))
 });