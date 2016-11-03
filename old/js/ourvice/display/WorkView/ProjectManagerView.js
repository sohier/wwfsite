var ProjectManagerView = (function() {

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
    var isOpen = false;

    var curId = 0;
    var lastId = -1;
    
    var classArray = [];
    var subClassArray = [];
    var currentViewPointer = "";
    var currentSubViewPointer = "";

     

    var direction = 1; // positive  means forward, negative means backwards, used to let the app know if it was a next event or previsous event 

    var dragElement;
    var isSwipeEnabled = false;
    var startDragX = 0;
    var startDragY = 0;
    var distanceX = 0;
    var distanceY = 0;
    var swipeDistance = 100;

    var stageWidth;
    var stageHeight;
    var isTouchDown = false;
    var isTouchDevice;

    var mainView;   // used to move block


    function openView() 
    {
    	if( isOpen == false )
    	{
    		isOpen = true;
            addEventListeners();
    		
            stageWidth = SwissArmyKnife.browserWidth();
            stageHeight = SwissArmyKnife.browserHeight();
            
           

    	}
       
    }

    function closeView() {
    	if( isOpen == true )
    	{
    		isOpen = false;
            removeEventListeners();
        	
        }
    }

    function addEventListeners()
    {
        // SwissArmyKnife.addEvent( 'touchmove', document , documentMoveTouchHandler );
        // document.addEventListener("touchmove", documentMoveTouchHandler, false);
    }

    function removeEventListeners()
    {

    }

    // used to stop stage dragging in crapple ios safri
    function documentMoveTouchHandler()
    {
        //event.preventDefault();

    }

    function resizeEvent( w, h )
    {
        if( isOpen == true )
        {
            //console.log( " ProjectManagerView : resizeEvent" );
            stageWidth = w;
            stageHeight = h;
           // InfoView.resizeEvent( w, h );
           if( currentViewPointer != 'undefined' )
           {
                //  currentViewPointer.resizeEvent( w, h );
           }
            
            
        }

    }

    function setDirection( val )
    {

         direction = val;

    }

    function updateById( id )
    {

        //console.log( convertToDeeplinkByID( id )  + " ::::::: function updateById( id )"  )
        SWFAddress.setValue( convertToDeeplinkByID( id ) );
       // loadById(     convertToDeeplinkByID( id )     );

    }

    function changeColorById( id )
    {
        /*
        var color = DataModelLunchBox.getColorById( id );
        MenuView.changeColor( color );
        //InfoView.changeColor( color );
        FullScreenLoader.changeColor( color );
        NextPrev.changeColor( color );

        */
    }

    function loadById( id )
    {
        //disableSwipeEvents();
        curId = id;
        MenuView.setSelect( id );
        MenuView.closeView();
        YtPlayerView.closeView();
       // MenuView.closeTabBtn();
       // console.log( curId + " curId from function loadById( id ) "  );

       //changeColorById( id )


        if( currentViewPointer != "" )
        {
            currentViewPointer.closeView();
            currentSubViewPointer.closeView();
            
        }else{





        }

        

       
       // NextPrev.closeView();
        currentViewPointer = classArray[id];
        currentSubViewPointer = subClassArray[id];

        currentViewPointer.getOurviceLoaded().add( onLoadedEventHandler );
        currentViewPointer.getOurviceOpened().add( onOpenCompleteEventHandler );
        currentViewPointer.getOurviceClosed().add( onCloseCompleteEventHandler );

       

        if( currentViewPointer.getIsLoaded() == false )
        {
           // FullScreenLoader.openView();
            currentViewPointer.loadAll();
            currentSubViewPointer.loadAll();
        }else{
             currentViewPointer.openView();
             currentSubViewPointer.openView();
        }
       
        lastId = curId
   

    }

        

    // Reset everything
    function init() {
        // If there is an open preload queue, close it.
   
      var len =  DataModelLunchBox.getHeroDataLength()
      for( var i = 0 ; i < len ; i ++ )
      {
            var heroModule = new HeroView();  
            heroModule.init( i );
            classArray[i] = heroModule;

            var mySub3ColView = new Sub3ColView();
            mySub3ColView.init(i , DataModelLunchBox.getContentSubDataById( i ).rowCount );
            subClassArray[i] = mySub3ColView;
      }

     
    }

    function changeAddressHandler( event )
    {
       // closeMenu()
       // closeInfoView();
        // console.log(  SWFAddress.getValue() + "   function changeAddressHandler( event ) function changeAddressHandler( event ) function changeAddressHandler( event ) function changeAddressHandler( event ) function changeAddressHandler( event ) " );
        if( SWFAddress.getValue() == "/" )
        {
            loadById(   convertDeepLink( SWFAddress.getValue() )    );

        }else{

            
            loadById(   convertDeepLink( SWFAddress.getValue() )    );


        }
    }

    function convertToDeeplinkByID( id )
    {
         var sectionArray = DataModelLunchBox.getDeepLinkData();

         return sectionArray[id];

    }
    function convertDeepLink( deepLink )
    {
        var i = 0;
        var sectionArray = DataModelLunchBox.getDeepLinkData();
        var result = "";
        for (i=0; i< sectionArray.length ; i++)
        {
            if ( deepLink == sectionArray[i] )
            {
                result = i;

            }

        }
        //console.log( result + " function convertDeepLink( deepLink )" )
        return result;

    }

    function initSwfAddress()
    {
        SWFAddress.addEventListener( "change" , changeAddressHandler );

    }


    function onOpenCompleteEventHandler( string )
    {

       // console.log( string  );
       // NextPrev.openView();
       // MenuView.openTabBtn();

       // enableSwipeEvents();
        //console.log( string + " onOpenCompleteEventHandler" )
        if( curId == 0 )
        {

            // loadById( 1 )

        }
       
       
    }

    function onCloseCompleteEventHandler( string , pid  )
    {
        //console.log( string + " " + pid );
        var ref = classArray[ pid ];
       // console.log( ref + " has event listener?"   );
        

        /*
        ref.getOurviceLoaded().remove( onLoadedEventHandler );
        ref.getOurviceOpened().remove( onOpenCompleteEventHandler );
        ref.getOurviceClosed().remove( onCloseCompleteEventHandler );
       */
    }

    function onLoadedEventHandler( string )
    {

       // console.log( string + " "  + currentViewPointer.getPID() + " " + curId );

       // FullScreenLoader.closeView();

        stageWidth = SwissArmyKnife.browserWidth();
        stageHeight = SwissArmyKnife.browserHeight();

        if( currentViewPointer.getPID() == curId )
        {
            currentViewPointer.openView() ;
            currentSubViewPointer.openView();

            
        }

    }

    

    function getCurId()
    {

        return curId;

    }

    function getDirection()
    {
        return direction;
    }


    function initDomPointers()
    {
        mainView = document.getElementById( "js-viewItem" );
        isTouchDevice = SwissArmyKnife.doesDeviceSupportTouch();

    }

    initDomPointers();

    
    // Because I don't have public variables, I can just return an object instead
    // of an object api var. Whether you return an object api var or just return
    // an object, it's the same thing and a matter of preference.
    return {

    	// public functions
        openView: openView,
        closeView: closeView,
        
        resizeEvent: resizeEvent,
        init: init,
        updateById: updateById,
        getCurId: getCurId,
       
        initSwfAddress: initSwfAddress,
       
        // public vars

        isOpen: isOpen,
        curId: curId,
        stageWidth : stageWidth,
        stageHeight: stageHeight,
        mainView : mainView,
        direction: direction,
        isTouchDevice: isTouchDevice
    };

})();