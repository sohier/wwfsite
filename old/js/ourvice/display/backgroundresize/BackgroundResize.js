var BackgroundResize = (function() {

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
        var map = {};
        var preload;
        var loader;
        var manifest;
        var preloadid = 0;

        var isOpen = "false";
        var isLoaded = "false";

        var initW = 0;
        var initH = 0;

        function openView() 
        {
            if( isOpen == "false" )
            {
                isOpen = "true";
                loadAll();

            }
        }
        // Reset everything
        function reload() {
            // If there is an open preload queue, close it.
            if (preload != null) { preload.close(); }

            // Reset the UI
            
           
            

            // Push each item into our manifest
            var model = DataModelLunchBox.getThemeDataById(0)
            var temps =  model.backgroundImage;
            manifest = [ temps  ];

            // Create a preloader. There is no manfest added to it up-front, we will add items on-demand.
            preload = new PreloadJS();
            preload.onFileLoad = handleFileLoad;
            preload.onProgress = handleOverallProgress;
            preload.onFileProgress = handleFileProgress;
            preload.onError = handleFileError;
            preload.setMaxConnections(1);
            preloadid = 0;
           

        }

        function stop() {
            if (preload != null) { preload.close(); }
        }

        function loadAll() {
            while (manifest.length > 0) {
                loadAnother();
            }
        }

        function loadAnother() {
            // Get the next manifest item, and load it
            var item = manifest.shift();
            preload.loadFile(item);

            // Create a new loader display item
          
        }

        // File complete handler
        function handleFileLoad(event) {

            var div = document.getElementById("js-background");
            //console.log ( div )

            preloadid = preloadid +1;
            // Get a reference to the loaded image (<img/>)
            div.style.opacity = 0;
            var img = event.result;
            img.setAttribute('id', 'js-backgroundIMG');
            div.appendChild(img); // Add it to the DOM
            
            var divb = document.getElementById("js-backgroundIMG");
            initW = divb.offsetWidth;
            initH = divb.offsetHeight;
            
            if( preloadid == 1 )
            {
               isLoaded = "true";
               resizeEvent( SwissArmyKnife.browserWidth() , SwissArmyKnife.browserHeight() );
            }

            TweenLite.to( div , 1 ,  {css:{  opacity:1  }    }   );
            
        }

        

        // File progress handler
        function handleFileProgress(event) {
            //var div = map[event.src]; // Lookup the related item
            //div.children("DIV").width(event.progress*div.width()); // Set the width the progress.
        }

        // Overall progress handler
        function handleOverallProgress(event) {   //http://ourvice.com/clients/ourvice/html5/assets/reg/backs.jpg
            
        }

        // An error happened on a file
        function handleFileError(event) {
            //alert( event );
        }

        function touchScale()
        {
            var divCont = document.getElementById("js-backgroundIMG");
            TweenLite.to( divCont , .5 ,  {css:{   scale: .95 }  , delay:0  , ease:Power2.easeOut }   );
        }

        function touchScaleDone()
        {
            var divCont = document.getElementById("js-backgroundIMG");
            TweenLite.to( divCont , .5 ,  {css:{   scale: 1 }  , delay:0  , ease:Power2.easeOut }   );
        }

        function resizeEvent( w, h )
        {
            if( isLoaded == "true" )
            {
                var div = document.getElementById("js-backgroundIMG");

                var divCont = document.getElementById("js-background");

               
                var stageWidth = w;
                var stageHeight = h;
           
                // Calculate new height and width

                var offsetBleed = 0;
                
                var ratio = initH / initW;

                var imgWidth = stageWidth + offsetBleed;
                var imgHeight = imgWidth * ratio;

                var myX = 0;
                var myY = 0;

                div.style.width = imgWidth + 'px';
                div.style.height = imgHeight + 'px';

                if( imgHeight  < stageHeight )
                {
                    var ratio = initW /initH ;
                    imgHeight = stageHeight + offsetBleed;
                    imgWidth = ( imgHeight + offsetBleed )* ratio;
                    div.style.width = imgWidth + 'px';
                    div.style.height = imgHeight + 'px';

                    myY = ( offsetBleed/2)*-1;
                    divCont.style.top = myY + "px" ;

                }else{
                    myY =  -(  imgHeight - stageHeight  )/2;
                   
                    
                    divCont.style.top = myY + "px" ;
                   

                }

                if ( imgWidth < stageWidth ) {
                     myX  = 0;
                     divCont.style.left = myX + "px" ;
                    
                }else{
                      
                     myX  = ( stageWidth - imgWidth )/2;
                     divCont.style.left = myX + "px" ;
                }
               
            }

        }

        reload();
        

    // Because I don't have public variables, I can just return an object instead
    // of an object api var. Whether you return an object api var or just return
    // an object, it's the same thing and a matter of preference.
    return {

    	// public functions
        resizeEvent: resizeEvent,
        touchScale: touchScale,
        touchScaleDone: touchScaleDone,
        openView: openView
        // public vars

        //retina: retina
    };

})();