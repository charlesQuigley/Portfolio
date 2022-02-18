
//Array that holds all elements whose visibility needs to be hidden
//when the phone menu is displayed.
//All elements that use intersection observers disregard z-index for some reason,
//so, these elements will be displayed over the phone menu, which shouldn't happen.
//The phone menu should be over everything.
var removals = document.querySelectorAll('.hide-from-phone-menu');

console.log(removals);



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
        //Hide all elements that use intersection observers because they 
        //disregard z-index and are displayed over the phone menu.
        for(var i = 0; i < removals.length; i++)
        {
            removals[i].style.visibility = "hidden";
        }

        burgerMenu.classList.add('burger-menu-active'); //add the class to burger menu
                                                    //signifying that the burger menu should now be open.
        
        //get rid of border on spans 
        for(var i = 0; i < spans.length; i++)
        {
            spans[i].style.border = "none";
        }

        //Make an X with the burger spans
        spans[0].style.transformOrigin = "0% 0%";
        spans[2].style.transformOrigin = "0% 100%";
        spans[1].style.opacity = "0";
                                                
        spans[0].style.transform = "rotate(45deg) translate(-2px, -1px)";
        spans[2].style.transform = "rotate(-45deg) translate(-4px, 3px)";

        //make sure the rest of the page is empty so nothing pops-up over the menu.
       // content.style.position = "absolute";
        //content.style.visibility = "hidden";

        //display the menu links
        burgerMenuLinks.classList.add("burger-menu-open");

        for(var i = 0; i < burgerMenuLinks_li.length; i++)
        {
            burgerMenuLinks_li[i].style.visibility = "visible";
        }
    }
    else
    {   //if it does exist, then the menu is currently open
        
        //Display all elements that use intersection observers because they 
        //disregard z-index and are displayed over the phone menu. Since phone meny is closed,
        //these elements can become visible again.
        for(var i = 0; i < removals.length; i++)
        {
            removals[i].style.visibility = "visible";
        }

        burgerMenu.classList.remove('burger-menu-active'); //remove the class from burger menu
        //signifying that the menu should now be closed.

        //re-apply border on spans 
        for(var i = 0; i < spans.length; i++)
        {
            spans[i].style.border = "1px solid black";
        }

        //Make an burger with the burger spans
        spans[0].style.transformOrigin = "0% 0%";
        spans[2].style.transformOrigin = "0% 0%";
        spans[1].style.opacity = "1";
                                                        
        spans[0].style.transform = "rotate(0deg) translate(0px)";
        spans[2].style.transform = "rotate(0deg) translate(0px)";

        for(var i = 0; i < burgerMenuLinks_li.length; i++)
        {
            burgerMenuLinks_li[i].style.visibility = "hidden";
        }

        //make sure the rest of the page is displayed again
        //content.style.position = "relative";
        //content.style.visibility = "visible";    

        //Hide the menu links
        burgerMenuLinks.classList.remove("burger-menu-open");


       
    }

}