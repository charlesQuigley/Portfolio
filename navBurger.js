function burgerClick(){

    var burgerMenu = document.querySelector('.nav-bar-burger');
    var burgerMenuLinks = burgerMenu.querySelector('.burger-menu');
    var burgerMenuLinks_li = burgerMenuLinks.querySelectorAll('li');

    //the rest of the webpage, minus the burger menu stuff.
    var content = document.querySelector('#content');

    //array of all three spans
    var spans = burgerMenu.querySelectorAll('span');

    //see if .burger-menu-open class exists in the HTML
    var openedMenu = document.querySelector('.burger-menu-active');

    if(openedMenu == null) //if it doesn't, then the menu is currently closed 
    {
        burgerMenu.classList.add('burger-menu-active'); //add the class to burger menu
                                                    //signifying that the burger menu should now be open.
        //Make an X with the burger spans
        spans[0].style.transformOrigin = "0% 0%";
        spans[1].style.transformOrigin = "0% 100%";
        spans[2].style.opacity = "0";
                                                
        spans[0].style.transform = "rotate(45deg) translate(-2px, -1px)";
        spans[1].style.transform = "rotate(-45deg) translate(-10px, 10px)";

        //make sure the rest of the page is empty so nothing pops-up over the menu.
       // content.style.position = "absolute";
        //content.style.visibility = "hidden";

        //display the menu links
        burgerMenuLinks.classList.add("burger-menu-open");


        //each link fades-in a few hundred milliseconds after the last link.
        var linkFadeIn = 2000;

        for(var i = 0; i < burgerMenuLinks_li.length; i++)
        {
          //  burgerMenuLinks_li[i].style.transition = linkFadeIn + "ms ease-in";

            burgerMenuLinks_li[i].classList.add('burger-menu-link_fade-in');

           // linkFadeIn = linkFadeIn + 600;
        }
    }
    else
    {   //if it does exist, then the menu is currently open
        burgerMenu.classList.remove('burger-menu-active'); //remove the class from burger menu
                                                        //signifying that the menu should now be closed.

        //Make an burger with the burger spans
        spans[0].style.transformOrigin = "0% 0%";
        spans[1].style.transformOrigin = "0% 0%";
        spans[2].style.opacity = "1";
                                                        
        spans[0].style.transform = "rotate(0deg) translate(0px)";
        spans[1].style.transform = "rotate(0deg) translate(0px)";

        //make sure the rest of the page is displayed again
        //content.style.position = "relative";
        //content.style.visibility = "visible";    

        //Hide the menu links
        burgerMenuLinks.classList.remove("burger-menu-open");
        burgerMenuLinks.classList.add("burger-menu-close");
    }

}