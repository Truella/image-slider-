const div = document.querySelector(".container");
const buttons = document.querySelectorAll("input")
let counter = 0;
const images = ["img2.jpg", "img3.jpg", "img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg"];
  //select both left and right button. Add event listeners
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('prevBtn')){
        counter--
        if(counter < 0){
          counter = images.length -1
        }
        div.style.backgroundImage = `url('${images[counter]}')`
      }
      if (button.classList.contains('nextBtn')){
        counter++
        if(counter > images.length -1){
          counter = 0
        }
        div.style.backgroundImage = `url('${images[counter]}')`
      }
    })
  })
