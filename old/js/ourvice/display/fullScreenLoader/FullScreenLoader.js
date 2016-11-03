var FullScreenLoader = (function() {

    // Just so you can see what "this" refers to. It's the global window object.
    // Never attach anything to "this" because then it's a global var/method
    // and you start polluting the global namespace.
  

    // This pattern gives you closure privacy. This is self executing which
    // means you don't have to use the new operator but this is a static/singleton
    // class. Only one instance is created.

    // All methods are private. You don't have to worry about scoping or using
    // "this". If you were to trace out "this", you would get an instance of
    // the global window object. Never use "this" within the module pattern.
    'use strict';
    var isOpen = "false";

    var mainProgress;
    var innerProgressBar;


    function openView() 
    {
    	if( isOpen == "false" )
    	{
    		isOpen = "true";
            addEventListeners();
    		showProgressbar();
           
            
           

    	}
       
    }

    function closeView() 
    {
    	if( isOpen == "true" )
    	{
    		isOpen = "false";
            removeEventListeners();
        	hideProgressbar();
        }
    }

    function addEventListeners()
    {

    }

    function removeEventListeners()
    {

    }

    

    function showProgressbar()
    {
        
       
        TweenLite.to( mainProgress , .5 , {css:{   top:"0px" , onComplete:killProgressbar   }, delay:0 } );
    }

    
    function hideProgressbar()
    {
        TweenLite.to( mainProgress , .5 , {css:{   top:"-20px" , onComplete:killProgressbar   }, delay:.3 } );
    }

    function killProgressbar()
    {        
        innerProgressBar.style.width  = 0 +"%" 
    }

   

        // Overall progress handler
    function upDateProgressBar( percent ) 
    {
        innerProgressBar.style.width  = percent; //* window.innerWidth );
        
    }

     function changeColor( colorObj )
    {
        
        innerProgressBar.style.backgroundColor = colorObj.color0;
        
    }

    function initDomPointers()
    {
        mainProgress = document.getElementById("mainProgress");
        innerProgressBar = document.getElementById("js-progress");
    }

    initDomPointers();

    // Because I don't have public variables, I can just return an object instead
    // of an object api var. Whether you return an object api var or just return
    // an object, it's the same thing and a matter of preference.
    return {

    	// public functions
        openView: openView,
        closeView: closeView,
        upDateProgressBar: upDateProgressBar,
        changeColor: changeColor,
        // public vars

        isOpen: isOpen
    };

})();