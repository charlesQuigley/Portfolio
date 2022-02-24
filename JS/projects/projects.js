
//Observers

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".from-left, .from-down");

console.log(faders);
console.log(sliders);


const slideOptions ={
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px",
};

const appearanceOptions ={ 
    //threshold of 1 means the entire element needs to be visible on the page before the fade-in occurs 
    //threshold 0 of 0 means the entire element does not need to be visible before the fade-in / slide-in occurs.
    threshold: 1,
    rootMargin: "0px 0px -150px 0px",
  
};


const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll){

    entries.forEach(entry => {
        if(!entry.isIntersecting)
        {
            //if the entry isn't intersecting with the page, then this function is finsihed.
            return;
        }
        else
        {
            //The entry IS intersecting with the page.
            entry.target.classList.add("appear");
            slideOnScroll.unobserve(entry.target); //this makes sure we stop looking at that intersection
                                                    //once it's already occured. So, fade-in's
                                                    //for each element/entry only happen 
                                                    //once per page.
            
            
        }
    })

}, slideOptions);



var listItem_fadeIn_timer = 0;

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

    entries.forEach(entry => {
        if(!entry.isIntersecting)
        {
            //if the entry isn't intersecting with the page, then this function is finsihed.
            return;
        }
        else
        {
            /* I'm using a list of items to show which languages I know in the 'Languages' section.
                All of these <li> tags (each item) has the class 'fade-in'. I DON'T want all the items
                to fade-in at the same time. So, I set a timeout function. So after adding the 'appear'
                class and unobserving each <li> entry (each item), I add 400ms to the timer, 
                which is 'listItem_fadeIn_timer'. So basically, instead of all the items fading in
                at the same time, the first item starts to fade-in after 0ms. Then, the second
                item starts to fade-in after 400ms. The third item starts to fade-in after 800ms. 
                So on and so forth. That is how I am fading-in each list item one-at-a-time instead
                of fading-in all items at once. */
            setTimeout(() =>{

            
            //The entry IS intersecting with the page.
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target); //this makes sure we stop looking at that intersection
                                                    //once it's already occured. So, fade-in's
                                                    //for each element/entry only happen 
                                                    //once per page.
            }, listItem_fadeIn_timer);
            
            //Add 400ms to the timer after the previous list item has faded-in.
            //The first item will begin to fade in after 0ms. The second item will begin to fade-in after 400ms.
            //etc.
            listItem_fadeIn_timer = listItem_fadeIn_timer + 300;
        }
    })

}, appearanceOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
    
});

sliders.forEach(slider=> {
    slideOnScroll.observe(slider);
});

//---------------------------------------------------------------//

//MODAL//

/*
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal

var img = document.getElementById("profile-picture");
var modalImg = document.getElementById("image");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }


  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalButton")[0];

span.onclick = function() {
    modal.style.display = "none";
  }
*/



/************************SLIDESHOWS*********************************/
var slideIndex = [1,1];
var slideID = ['slides1', 'slides2']; //The classes of different slideshow slides. The first 
                                    //slideshow has slides of class 'slides1'. The second
                                    //slideshow has slides of class 'slides2'. Etc.
                                    //These classes can easily be seen in the HTML.

showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function prev_next_slides(n, slideShowNumber) {
  showSlides(slideIndex[slideShowNumber] += n, slideShowNumber);
}

function BlockMove(event) {
    // Tell Safari not to move the window.
      event.preventDefault();
}


$(".slides1").on("swipeleft", function(){
    showSlides(slideIndex[0] += 1, 0);
});

$(".slides1").on("swiperight", function(){
    showSlides(slideIndex[0] -= 1, 0);
});

$(".slides2").on("swipeleft", function(){
    showSlides(slideIndex[1] += 1, 1);
});

$(".slides2").on("swiperight", function(){
    showSlides(slideIndex[1] -= 1, 1);
});



function showSlides(n, slideShowNumber) {
  var i;
  var slides = document.getElementsByClassName(slideID[slideShowNumber]);
  var dots;
  var captions;
  
  //Figure out which dots and captions we're working with by knowing which slideshow 
  //we're working with.
  for(var j = 0; j < slides[0].classList.length; j++) //Look through the list of classes
  {
      if(slides[0].classList[j] === 'slides1') //if one of the classes is 'slides1'
      {
        //then we know we're working with the dots and captions that pertain to slideshow 1
        dots = document.getElementsByClassName("dot1");
        captions = document.getElementsByClassName("captions1");
      }
      else if(slides[0].classList[j] === 'slides2') //if one of the clases is 'slides2'
      {
        //then we know we're working with the dots and captions that pertain to slideshow 2  
        dots = document.getElementsByClassName("dot2");
        captions = document.getElementsByClassName("captions2");
      }
  }

  for(i = 0; i < slides.length; i++)
  {
     slides[i].style.transition = "300ms ease-in";
  }

  
  
  if (n > slides.length) {
      slideIndex[slideShowNumber] = 1;

      for (i = 0; i < slides.length; i++) {

        slides[i].style.transition = "0s";
     }

      
 }

  if (n < 1) {
      slideIndex[slideShowNumber] = slides.length;
      for (i = 0; i < slides.length; i++) {

        slides[i].style.transition = "0s";
     }
    }


  var translatePercent = (slideIndex[slideShowNumber]-1) * -100;

  //alert(translatePercent);

  for (i = 0; i < slides.length; i++) {

    //slides[i].style.transition = "300ms ease-in";
     // slides[i].style.display = "none";
      captions[i].style.display = "none";

      slides[i].style.transform = "translateX(" + translatePercent + "%)";

      //translatePercent = translatePercent + 100;
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[slideShowNumber]-1].style.display = "block";
  captions[slideIndex[slideShowNumber]-1].style.display = "block";
  dots[slideIndex[slideShowNumber]-1].className += " active";
}




//---------------------------------------------------------------//

//MODAL//

var modal = document.getElementById("myModal");

var slidesOnClick = document.getElementsByClassName("slides");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("image");

for(var i = 0; i < slidesOnClick.length; i++)
{

    slidesOnClick[i].onclick = function(){
        var isFullScreenImg = false;

        modal.style.display = "block";

        modalImg.classList.remove('fullPageModalImg');
        
        //If image is a full-screen image (an image of an ENTIRE web page), 
        //then it will have the class 'fullPageImage'.
        //If it has this class, then resize the image so that it fits nicely within the screen. 
        for(var j = 0; j < this.classList.length; j++)
        {
            if(this.classList[j] == 'fullPageImage')
            {
                isFullScreenImg = true;
                break;
            }
        }

        if(isFullScreenImg == true)
        {
            modalImg.classList.add('fullPageModalImg');
        }

        modalImg.src = this.src;
    }
}

/*slidesOnClick.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }*/


  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalButton")[0];

span.onclick = function() {
    modal.style.display = "none";
  }