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
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  
};

var listItem_slideIn_timer = 0;

const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll){

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
            slideOnScroll.unobserve(entry.target); //this makes sure we stop looking at that intersection
                                                    //once it's already occured. So, fade-in's
                                                    //for each element/entry only happen 
                                                    //once per page.
            }, listItem_slideIn_timer);
            
            //Add 400ms to the timer after the previous list item has faded-in.
            //The first item will begin to fade in after 0ms. The second item will begin to fade-in after 400ms.
            //etc.
            listItem_slideIn_timer = listItem_slideIn_timer + 200;
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
