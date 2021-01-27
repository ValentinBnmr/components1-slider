const imgs = document.querySelectorAll('.container-slides img');
const next = document.querySelector('.right');
const previous = document.querySelector('.left');
const circles = document.querySelectorAll('.circle');
const range = document.querySelector('.slider-wrapper input')
let index = 0;

next.addEventListener('click', nextSlide);


function nextSlide(){

    if(index < 2){

        imgs[index].classList.remove('active')
        index++;
        imgs[index].classList.add('active')
        

    }
    else if(index === 2){
        imgs[index].classList.remove('active')
        index = 0;
        imgs[index].classList.add('active')
    }

    // Lie le passage de slides au changement de coucleur des petit cercles
    for(i = 0; i < circles.length; i++){

        if(circles[i].getAttribute('data-click') - 1 === index){
            circles[i].classList.add('active-circle');
        }
        else {
            circles[i].classList.remove('active-circle');
        }

    }
    

}

previous.addEventListener('click', previousSlide);

function previousSlide(){

    if(index > 0){

        imgs[index].classList.remove('active')
        index--;
        imgs[index].classList.add('active')
        

    }
    else if(index === 0){
        imgs[index].classList.remove('active')
        index = 2;
        imgs[index].classList.add('active')
    }

    // Lie le passage de slides au changement de coucleur des petit cercles
    for(i = 0; i < circles.length; i++){

        if(circles[i].getAttribute('data-click') - 1 === index){
            circles[i].classList.add('active-circle');
        }
        else {
            circles[i].classList.remove('active-circle');
        }

    }
    
}

document.addEventListener('keydown', keyPressed)

// Permets de passer à la slide suivent ou précédente avec les flèches gauches ou droites
function keyPressed(e){

    if(e.keyCode === 37){
        previousSlide();
    }
    else if(e.keyCode === 39){
        nextSlide();
    }


}



//Gestion du lien entre les petites cercles et les slides
circles.forEach(circle => {

    circle.addEventListener('click', function(){

        for(i = 0; i < circles.length; i++) {
            circles[i].classList.remove('active-circle');
        }
        this.classList.add('active-circle');

        imgs[index].classList.remove('active')
        index = this.getAttribute('data-click') - 1;
        imgs[index].classList.add('active')
    })

})

// Crée une boucle qui affiche une nouvelle slide toutes les 3s
let loop = setInterval(nextSlide, 3000);





