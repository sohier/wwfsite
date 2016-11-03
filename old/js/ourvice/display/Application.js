var Application = (function() {

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
   

    
    var progressbar;
    var masterShell;

    var maxWidth = 1400;

    var isTouch;
    var forceWidthDiv;
    

    function addEventListeners()
    {
        SwissArmyKnife.addEvent( 'resize', window , resizeViewport ); // event wrapper
        //window.addEventListener('resize', resizeViewport, false);
    }

    function removeEventListeners()
    {
        SwissArmyKnife.removeEvent( 'resize', window , resizeViewport ); 
        //window.removeEventListener('resize', resizeViewport, false);
    }

    function resizeViewport( event )
    {
        resizeViews();       
            
    }

    function resizeViews()
    {

        var stageWidth = SwissArmyKnife.browserWidth();
        var stageHeight = SwissArmyKnife.browserHeight();


        checkStageCentering( stageWidth );
       

       // console.log( stageWidth + " : stageWidth from Application" );
       // console.log( document.width + " : html" );
            
       // ProjectManagerView.resizeEvent( stageWidth , stageHeight );
       // BackgroundResize.resizeEvent( stageWidth , stageHeight );
       // NextPrev.resizeEvent( stageWidth , stageHeight );



    }

    function checkStageCentering( stageWidth )
    {
        /*
        if( stageWidth > maxWidth )
        {
            masterShell.style.left = ( stageWidth/2 ) - ( maxWidth/2 ) + "px"
        }else
        {
            masterShell.style.left = 0 + "px"
        }

        */


    }
    
    function init() 
    {
       
        initDomPointers()
        addEventListeners();
            

       ProjectManagerView.init();
       ProjectManagerView.openView();     
       MenuView.init();     
       // BackgroundResize.openView();
       resizeViews();


        initSwfAddress();

        
       
        
        //var nemo = new Animal();    // nemo.name == "Nemo" 

            

    }

   function initDomPointers()
    {
       
        //progressbar = document.getElementById("js-progress");
        //forceWidthDiv =  document.getElementById("js-forceWidthDiv");
        isTouch = SwissArmyKnife.doesDeviceSupportTouch();

        

    }

    function initSwfAddress()
    {
        ProjectManagerView.initSwfAddress();
        //ProjectManagerView.loadById( 0 );
        

    }

    
    return {

    	// public functions
        
        init: init
       
        // public vars

       
    };

})();