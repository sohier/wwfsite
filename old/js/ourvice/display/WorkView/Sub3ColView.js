var Sub3ColView = function () {

    'use strict';
    
    var scope = this;  
    

    var isOpen = false;
    var isLoaded = false;
    var isAllLoaded = false;

    var map = {};
    var pointerArr = [];
    var loadedArr = [];
   

    var imageViews = [];
    var headerViews = [];
    var subHeaderViews = [];
    var copyViews = [];
    var jsViews =[];
    var playBtns = [];

    var preload;
    var loader;
    var manifest;
    var manifestReversed;
    
    var preloadid = 0;

    
    var manifestLength = ""

    var pid = 0;

    var curId = 0;

    // signal pointers for events
    var ourviceLoaded;
    var ourviceOpened;
    var ourviceClosed;

    var imgView0;
    var jsView0;
    //var loadedImage;

    var headerView0;
    var col2View0;
    var col3View0;
    

    

    var stageWidth;
    var stageHeight;

    var rowCount = 1;
    
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
           
           for( var j=0; j < 10; j ++ )
            {
                    var poop = document.getElementById( "js-3ColView" + j ); //$("#js-view");
                    poop.style.display = "none";
                    setOpacity(  poop , 0 );
            }
           
            
            if( isAllLoaded == true )
            {
                openAll()

            }else{

                 setViewContentById( 0 )
            }
            
           
           
           

        }
        
       
    }

    function openAll()
    {

        for( var i=0; i < rowCount; i ++ )
        {
            setViewContentById( i )
        }

    }

    function closeView() {
        if( isOpen == true )
        {
            isOpen = false;
            removeEventListeners();
            //console.log('public closeView() has been called');

           
           
            for( var i=0; i < rowCount; i ++ )
            {

                var item = pointerArr[ i ]
                TweenLite.killTweensOf( jsViews[i] );
                setOpacity(  jsViews[i] , 0 );
                if( i != 0 )
                {
                    jsViews[i].style.display = "none";

                }

                var img = imageViews[ i ]

                var playBtn = playBtns[i]

                if( manifest["hasVideo" + i] == "true"  )
                {

                    if( ProjectManagerView.isTouchDevice == false )
                    {
                        SwissArmyKnife.removeEvent( 'mousedown' ,  playBtn ,  videoBtnClickHandler  );
                    }else
                    {
                        SwissArmyKnife.removeEvent( 'touchstart' ,  playBtn ,  videoBtnClickHandler  );

                    }

                }

            }


            
           
          

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
        /*
        if( ProjectManagerView.isTouchDevice == false )
        {

                SwissArmyKnife.addEvent( 'mousedown' ,  jsView ,  nextClickHandler );

        }else{
                SwissArmyKnife.addEvent( 'touchstart', jsView , nextClickHandler );
        }

        initDotBtns();
        */
    }

    function removeEventListeners()
    {
         /*
         if( ProjectManagerView.isTouchDevice == false )
        {
                SwissArmyKnife.removeEvent( 'mousedown' ,  jsView ,  nextClickHandler );

        }else{
                SwissArmyKnife.removeEvent( 'touchstart', jsView , nextClickHandler );
        }

        killDotBtns();
    */

    }




    function openCompleteHandler()
    {
        ourviceOpened.dispatch( "ourviceOpenCompleteEvent" );

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

        
    }

    function setViewContentById( id )
    {
            var img = imageViews[ id ]
            img.src = pointerArr[ id ].src;
            img.draggable = false;

            var playBtn = playBtns[id]

            var header =  headerViews[ id ]
            var col2 = subHeaderViews[ id ]
            var col3 = copyViews[ id ]
            
            header.innerHTML = manifest["header" + id];
            col2.innerHTML = manifest["subHeader" + id];
            col3.innerHTML = manifest["copy" + id];

           if( manifest["hasVideo" + id] == "true"  )
           {


                
                playBtn.youtubeid = manifest["youtubeid" + id];
                var isTouchDevice = SwissArmyKnife.doesDeviceSupportTouch();



                if( isTouchDevice == false )
                {
                    // console.log( isTouchDevice + " : isTouchDevice ");
                    SwissArmyKnife.addEvent( 'mousedown' ,  playBtn ,  videoBtnClickHandler  );
                }else
                {
                    SwissArmyKnife.addEvent( 'touchstart' ,  playBtn ,  videoBtnClickHandler  );

                }

                playBtn.style.cursor = "pointer"; 
                playBtn.style.cursor =  "hand";
                playBtn.style.display = "block";

           }else{

                 playBtn.style.cursor =  "default";
                 playBtn.style.display = "none";
           }
            
            jsViews[id].style.display = "block";

          //  TweenLite.to( col3, 3, {css:{scaleX:0.5 , scaleY:0.5}, ease:Power3.easeOut});


            var delays = [ .5, 1, 1.5 ]
           
            TweenLite.killTweensOf( jsViews[id] );
            TweenLite.to( jsViews[id] , .5 ,  { css:{  autoAlpha: 1 }  , delay: delays[id ] , onComplete:openCompleteHandler}   );

    }


    function videoBtnClickHandler( e )
    {
         var target = (e.currentTarget) ? e.currentTarget : e.srcElement;
         var id = target.youtubeid ;
        // console.log( "play vids");

         YtPlayerView.openView( id );
           

    }

     // Reset everything
    function init( id , _rowCount ) {

        pid = id;
        // If there is an open preload queue, close it.
        if (preload != null) { preload.close(); }

        rowCount = _rowCount;

        document.getElementById( "js-3ColView1").style.display= "none";
        document.getElementById( "js-3ColView2").style.display= "none";
      
        for( var i=0; i < rowCount; i ++ )
        {


            



            var jsView0 = document.getElementById( "js-3ColView" + i ); //$("#js-view");
            var imgView0  = document.getElementById( "js-imgColumn" + i ); 

            var playBtn0 = document.getElementById( "js-columnPlayImage" + i );
            


            
            var headerView0 = document.getElementById( "js-headerText" + i );

            var col2View0 = document.getElementById( "js-" + i+ "p1" );
            var col3View0 = document.getElementById( "js-" + i+ "p2" );
            
            jsView0.style.display ="none";

            imageViews[i] = imgView0;
            headerViews[i] = headerView0;
            subHeaderViews[i] = col2View0;
            copyViews[i] = col3View0;
            jsViews[i] = jsView0;

            playBtns[i] = playBtn0;

            setOpacity(  jsViews[i]  , 0 );


            

        }
        
        ourviceLoaded = new signals.Signal();
        ourviceOpened = new signals.Signal();
        ourviceClosed = new signals.Signal();   

        // get mafifest from DataModelLunchBox datamodel.
        manifest = DataModelLunchBox.getContentSubDataById( id );
        manifestLength =  1;

        // Create a preloader. There is no manfest added to it up-front, we will add items on-demand.
        preload = new PreloadJS();
        preload.onFileLoad = handleFileLoad;
        preload.onProgress = handleOverallProgress;
        //preload.onFileProgress = handleFileProgress;
        preload.onError = handleFileError;
        preload.setMaxConnections(1);
        
        //console.log( "init sub view " + pid );
       

    }

    

    function stop() {
        if (preload != null) { preload.close(); }
    }

    function loadAll() 
    {
        preloadid = 0;
        
        var i;
        for (i=0; i < rowCount ; i++)
        {
            loadAnother( i );
        }
    }

    function loadAnother( id ) {
        // Get the next manifest item, and load it
        var item = manifest["img" + id ]
       // console.log( item )
        preload.loadFile(item);

        
    }


    

    // File complete handler
    function handleFileLoad(event) {

      
       
        // Get a reference to the loaded image (<img/>)
        var img = event.result;
        var loadedImage =  img;
       // img.draggable = false;
        
       //console.log( img.src + " ***********  imgs" +  preloadid );

        



        

        pointerArr[ preloadid ] = loadedImage; //document.getElementById( "js" + preloadid +"item" + pid  );
        loadedArr[ preloadid ] = true;
        
        // Add it to the DOM
            
            
        if( preloadid == 0 )
        {
            isLoaded = true;


            
            
            ourviceLoaded.dispatch('ourviceLoadCompleteEvent');


            
                  openView();
           
            
        }else{

                setViewContentById( preloadid )
        }
            // dispatch evetn up to ProjectManagerView 

         preloadid = preloadid +1;

        if( preloadid == rowCount )
        {
            isAllLoaded = true;

        }

       
        
            
    }

   
    function setOpacity( testObj , value) 
    {
        testObj.style.opacity = value;
        testObj.style.filter = 'alpha(opacity=' + value + ')';
    }

    function doneTweeningHandler()
    {
       /// console.log(   " donetweening " );

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

     function initDomPointers()
    {
       

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

