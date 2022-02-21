var parallaxScroll_factor;

$(document).ready(function(){
    //On mobile device or tablet? If so, check == true. If not, check == false
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    //If not mobile device or tablet
    if(check == false)
    {
        //then get rid of parallax and just use background-attachment: fixed.
        const parallax = document.querySelectorAll('.parallax');
        for(var i = 0; i < parallax.length; i++)
        {
            parallax[i].classList.remove('parallax');
        }
        
    }
});

window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    let scrollPosition = window.scrollY;

    for(var i = 0; i < parallax.length; i++)
    {
        parallax[i].style.transform = 'translateY(' + scrollPosition * 0.15 +'px)';
        //parallax[i].style.backgroundPosition = '0% ' + scrollPosition * -0.4 + 'px';

    }


});






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
