var HeroView = function () {

    'use strict';
    
    var scope = this;  
    

    var isOpen = false;
    var isLoaded = false;
    var isAllLoaded = false;

    var map = {};
    var pointerArr = [];
    var loadedArr = [];
    var dotBtnArr = [];

    var rotateView;
    var jsView;
    var dotBtnShell;

    var preload;
    var loader;
    var manifest;
    var manifestReversed;
    var w = 238; // Item width
    var h = 170; // Item height
    var preloadid = 0;

    
    var manifestLength = ""

    var pid = 0;

    var curId = 0;

    // signal pointers for events
    var ourviceLoaded;
    var ourviceOpened;
    var ourviceClosed;


    var _transformOrigin =  "left bottom";     
    var _xpos = -1000;
    var _skewY = 180;

    var _transformOriginCLOSE =  "left bottom";
    var _skewYCLOSE = 180
    var _xposCLOSE = -1000;

    var delays = [ 0 , .025 , .05 , .075 , .1 , .125, .15 , .175 , .2 ];

    var dragStageWidth = 0;
    var dragStageHeight= 0;

    var stageWidth;
    var stageHeight;


    var isTimerRunning = false;
    var timer;
    
    function openView() 
    {
        
       
        if( isOpen == false  && isLoaded == true )
        {
            curId = 0;
            addEventListeners();

            //console.log('public openView() has been called');
            isOpen = true;
            
            //var has3d = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())
            //alert( has3d )

            


            var item = pointerArr[ curId ]
            TweenLite.killTweensOf( item);
            TweenLite.to( item , .5 ,  { css:{  autoAlpha: 1 }  , delay:0 , onComplete:openCompleteHandler}   );
            item.style.zIndex = 1;
            dotBtnArr[0].style.visibility = 'visible';
            setSelect( 0 );
            
            
            
            
           
           
           

        }
        
       
    }

    function closeView() {
        if( isOpen == true )
        {
            isOpen = false;
            removeEventListeners();
            //console.log('public closeView() has been called');
            stopTimer();
           
           


            var item = pointerArr[ curId ]
            TweenLite.killTweensOf( item);
            TweenLite.to( item , .5 ,  { css:{  autoAlpha: 0}  , delay:0 , onComplete:closeCompleteHandler }   );
           
          

        }
    }

    function startTimer()
    {
        if( isTimerRunning == false )
        {
            //console.log( "startTimer");
            isTimerRunning = true;
            timer = setTimeout( nextClickSlideHandler , 8000);
        }

    }

    function stopTimer()
    {
        if( isTimerRunning == true )
        {
            isTimerRunning = false;
            //console.log( "stopTimer");
            clearTimeout(timer);

        }

    }


    function killOpenTweens()
    {
        var i;
        for (i=0; i<manifestLength ; i++)
        {
            var node = pointerArr[i];
            TweenLite.killTweensOf( node );
        }
        

    }

    

    function addEventListeners()
    {
        if( ProjectManagerView.isTouchDevice == false )
        {

                SwissArmyKnife.addEvent( 'mousedown' ,  jsView ,  nextClickHandler );

        }else{
                SwissArmyKnife.addEvent( 'touchstart', jsView , nextClickHandler );
        }

        initDotBtns();
    }

    function removeEventListeners()
    {
         if( ProjectManagerView.isTouchDevice == false )
        {
                SwissArmyKnife.removeEvent( 'mousedown' ,  jsView ,  nextClickHandler );

        }else{
                SwissArmyKnife.removeEvent( 'touchstart', jsView , nextClickHandler );
        }

        killDotBtns();


    }




    function openCompleteHandler()
    {
        ourviceOpened.dispatch( "ourviceOpenCompleteEvent" );
        startTimer();

    }

    function closeCompleteHandler()
    {
       
        ourviceClosed.dispatch( "ourviceCloseCompleteEvent" , pid );

    }

    

    function getIsOpen()
    {
        return isOpen;
    }

    function getIsLoaded()
    {
        return isLoaded;
    }

    function resizeEvent( w , h )
    {

        stageHeight = h;
        stageWidth = w;

        if( isOpen == true && isLoaded == true )
        {
            
           
        }
    }

    function dragEvent( valX , valY )
    {
        /*
        if( isOpen == true && isLoaded == true )
        {
            
            var i;
            

            var tempManifestArr = manifest;
           

            var stageWidth = dragStageWidth;// SwissArmyKnife.browserWidth();
            var stageHeight = dragStageHeight; //SwissArmyKnife.browserHeight();

            
            for (i=0; i<manifestLength ; i++)
            {
                

                var centerX = stageWidth/2 - (manifest[i].width/2) + manifest[i].xoffset + valX + "px";
                var centerY = stageHeight/2 - (manifest[i].height/2) + manifest[i].yoffset + valY + "px";
                var node = pointerArr[i];
               
                TweenLite.to( node , .2 ,  {css:{  left:centerX , top:centerY  }  , delay: delays[i] }   );
            }
           
        }

        */

    }

     // Reset everything
    function init( id ) {

        pid = id;
        // If there is an open preload queue, close it.
        if (preload != null) { preload.close(); }

        

        jsView = document.getElementById( "js-heroContainer" ); //$("#js-view");
        dotBtnShell = document.getElementById( "js-dotBtnShell" );
       // $("#mainProgress .progress").width(0);

        
        ourviceLoaded = new signals.Signal();
        ourviceOpened = new signals.Signal();
        ourviceClosed = new signals.Signal();   

        // get mafifest from DataModelLunchBox datamodel.
        manifest = DataModelLunchBox.getHeroDataById( id );
        manifestReversed = cloneObject( manifest );// DataModelLunchBox.getDataById( id );
        manifestReversed.reverse();
        manifestLength = manifest.length;

        // Create a preloader. There is no manfest added to it up-front, we will add items on-demand.
        preload = new PreloadJS();
        preload.onFileLoad = handleFileLoad;
        preload.onProgress = handleOverallProgress;
        //preload.onFileProgress = handleFileProgress;
        preload.onError = handleFileError;
        preload.setMaxConnections(1);
        
        
       

    }

    function initDotBtns()
    {
        dotBtnArr = [];
        var i;
        var width = 0;
        var incW = 32;
        for ( i=0; i<manifestLength ; i++)
        {
            
            var node =  document.getElementById( "js-cbtn" + i );
            dotBtnArr[i] = node;
            width  = width + incW;
            if( isAllLoaded == true )
            {
                 node.style.visibility = 'visible';
            }
           
            node.btnId = i;

            if( ProjectManagerView.isTouchDevice == false )
            {
                SwissArmyKnife.addEvent( 'mousedown' ,  node ,  btnDotClickHandler  );
            }else
            {
                SwissArmyKnife.addEvent( 'touchstart' ,  node ,  btnDotClickHandler  );

            }

            
           
        }

        dotBtnShell.style.width = width+"px";

       

    }

    function killDotBtns()
    {
        
        var i;
      
        for ( i=0; i< manifestLength ; i++)
        {
            
            var node =  dotBtnArr[i];  
            node.style.visibility = 'hidden';
           
           var item = pointerArr[ i ]
           if( loadedArr[i] == true )
           {
                item.style.zIndex = (String(( pid + i ))+1)*-1;

           }
           
           // console.log( item.style.zIndex + " poop ");

            if( ProjectManagerView.isTouchDevice == false )
            {
                SwissArmyKnife.removeEvent( 'mousedown' ,  node ,  btnDotClickHandler  );
            }else
            {
                SwissArmyKnife.removeEvent( 'touchstart' ,  node ,  btnDotClickHandler  );

            }
            
           
        }

        dotBtnShell.style.width = 0+"px";

       

    }

    function btnDotClickHandler( e )
    {
        if (!e) var e = window.event;
        var target = (e.currentTarget) ? e.currentTarget : e.srcElement;
        var id = target.btnId ;        
        openById( id )
        setSelect( id );

    }

    function cloneObject(source) {
        var i;
        var array = []
        for (i in source) {
            if (typeof source[i] == 'source') {
                array[i] = new cloneObject(source[i]);
            }
            else{
                array[i] = source[i];
            }
        }

        return array;
    }

    function stop() {
        if (preload != null) { preload.close(); }
    }

    function loadAll() 
    {
        preloadid = 0;
        
        var i;
        for (i=0; i < manifestLength ; i++)
        {
            loadAnother( i );
        }
    }

    function loadAnother( id ) {
        // Get the next manifest item, and load it
        var item = manifest[id].image;
        preload.loadFile(item);

        
    }


    

    // File complete handler
    function handleFileLoad(event) {

      
       
        // Get a reference to the loaded image (<img/>)
        var img = event.result;
        var div =  img;

        //div.addClass("completeLeft");       
        div.className = "heroLoaded";
        div.id = "js" + preloadid+ "item" + pid ;     
        div.draggable = false;
        //div.attr("id", "js" + preloadid+ "item" + pid );

        div.style.zIndex = (String(( pid + preloadid ))+1)*-1;
        //console.log(  jsView.style.zIndex + " style.zIndex" )
       // console.log(  div.style.zIndex+ " div.style.zIndex " )
        jsView.appendChild(div);


        

        pointerArr[ preloadid ] = div; //document.getElementById( "js" + preloadid +"item" + pid  );
        loadedArr[ preloadid ] = true;
         preloadid = preloadid +1;
        // Add it to the DOM
            
            
        if( preloadid == 1 )
        {
            isLoaded = true;


            
            
            ourviceLoaded.dispatch('ourviceLoadCompleteEvent');

            // dispatch evetn up to ProjectManagerView 
        }else{
            if( isOpen == true )
            {

                dotBtnArr[preloadid -1].style.visibility = 'visible';
            }
             

        }

        if( preloadid == manifestLength )
        {
            isAllLoaded = true;

        }


        
            
    }

    function openById( id  )
    {

        curId = id;
        var item = pointerArr[ id ]
       // TweenLite.killTweensOf( item );
        stopTimer();
       
        setOpacity( item , 0 );
        item.style.zIndex = 1;

        var i;
        for ( i=0; i<manifestLength ; i++)
        {
            if( i != id )
            {
                if( loadedArr[ i  ] == true )
                {
                     var node = pointerArr[i];
                     TweenLite.killTweensOf( node );
                     node.style.zIndex = (( pid + i )+1)*-1;
                     node.style.visibility = "hidden";
                 }

            }
           
        }

        TweenLite.killTweensOf( item );
        TweenLite.to( item , .5 ,  { css:{  autoAlpha: 1 }  , delay:0  , onComplete:doneTweeningHandler  }   );
       
    }

    function setSelect( id )
    {
        var i;

        for ( i=0; i<manifestLength ; i++)
        {
            var node = dotBtnArr[i];
            if( i != id )
            {
                node.style.backgroundPosition = "0 -31px";
            }else{
                node.style.backgroundPosition = "0 0px";

            }
        }

    }

    function setOpacity( testObj , value) 
    {
        testObj.style.opacity = value;
        testObj.style.filter = 'alpha(opacity=' + value + ')';
    }

    function doneTweeningHandler()
    {

         startTimer();
       /// console.log(   " donetweening " );

    }

    function nextClickHandler()
    {

        if( MenuView.getIsOpen() == true )
        {
            MenuView.closeView();

        }else
        {
            var nextId = curId + 1;
            
            if( nextId < manifestLength && loadedArr[ nextId  ] == true)
            {

                openById( nextId );
                setSelect( nextId );

            }else if ( loadedArr[ 0  ] == true )
            {
                nextId = 0;
                openById( nextId );
                setSelect( nextId );
            }

        }
       

    }

    function nextClickSlideHandler()
    {

        
            var nextId = curId + 1;
            
            if( nextId < manifestLength && loadedArr[ nextId  ] == true)
            {

                openById( nextId );
                setSelect( nextId );

            }else if ( loadedArr[ 0  ] == true )
            {
                nextId = 0;
                openById( nextId );
                setSelect( nextId );
            }

       
       

    }
   
   
    function getOurviceLoaded()
    {
        return ourviceLoaded;
    }

    function getOurviceOpened()
    {
        return ourviceOpened;
    }

    function getOurviceClosed()
    {
        return ourviceClosed;
    }
    

    // File progress handler
    function handleFileProgress(event) {
        
    }

        // Overall progress handler
    function handleOverallProgress(event) {

       // FullScreenLoader.upDateProgressBar( ( preload.progress *100 ) + '%' );
       
    }

        // An error happened on a file
    function handleFileError(event) {
        
    }

    
    function getPID()
    {
        return pid;
    }

    

    return {

        // return getter and setter methods, no varibales, variables are accessible through getter and setter funtion listed in the return object ONLY!
        openView: openView,
        closeView: closeView,
        resizeEvent: resizeEvent,
        loadAll: loadAll,
        init: init,
        getIsLoaded: getIsLoaded,
        getPID: getPID,
        
        killOpenTweens: killOpenTweens,


        getOurviceLoaded: getOurviceLoaded,
        getOurviceOpened: getOurviceOpened,
        getOurviceClosed: getOurviceClosed
        
    };
}

