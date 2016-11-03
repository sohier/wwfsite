var YtPlayerView = (function() {

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
    var isTabOpen = false;
    var player;
    var done = false;
    var isPlayerReady = false;

    var youTubeId= "u1zgFlCw8Aw";

    var scrim;
    var jsplayer;
    var playerhook;

    var vidWidth = 800;
    var vidHeight = 450;


    function openView( _youTubeId ) 
    {
        if( isOpen == false )
        {
            isOpen = true;
            youTubeId = _youTubeId;
            
            if(  isPlayerReady == true )
            {
                showStyle();
                player.loadVideoById( youTubeId  , 0 , 1 )
                showStyle();
            }else{
                showStyle();
                player = new YT.Player('player', 
                {
                    height: vidHeight,
                    width: vidWidth,
                    videoId: youTubeId,
                    events: 
                    {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    }
                });

                showStyle();
            }

          

            //console.log (  document.getElementById('player').style.zIndex + ' zindex of player' );
            //console.log (  document.getElementById('js-scrim').style.zIndex + ' zindex of scrim' );
            //console.log (  document.getElementById('player').style.left + ' left of player' );
           
        }

    }

     function closeView() 
    {
        if( isOpen == true )
        {
            try{
                player.pauseVideo();
                isOpen = false;
                removeEventListeners();

                


                jsplayer.style.display = "none";
                jsplayer.style.visibility  =  "hidden";
                jsplayer.style.zIndex = -100;
                scrim.style.zIndex = -101; 
                playerhook.style.zIndex = -101;

                scrim.style.display = "none";

            }catch( err )
            {
                //console.log("poo" )

            }

            //TweenLite.killTweensOf( slideContainer  );
           // TweenLite.killTweensOf( ProjectManagerView.mainView );
           
           // TweenLite.to( slideContainer  , .5 ,  {css:{  top:"0px"  }  , delay:0 }   );
            
            
            
        }

    }

    function setOpacity( testObj , value) 
    {
        testObj.style.opacity = value;
        testObj.style.filter = 'alpha(opacity=' + value + ')';
    }

    function showStyle()
    {

            setOpacity( scrim , 0 )
            setOpacity( jsplayer , 0 )
            jsplayer.style.display = "block";
            jsplayer.style.visibility  = "visible";
            jsplayer.style.zIndex = 10000;

            playerhook.style.zIndex = 10010;
             
            scrim.style.display = "block";
            scrim.style.height = "100%";   
            scrim.style.width = "100%";
            scrim.style.zIndex = 9999; 
            

            var stageWidth = SwissArmyKnife.browserWidth();
            var stageHeight = SwissArmyKnife.browserHeight();
            jsplayer.style.marginRight = "auto";
            jsplayer.style.marginLeft = "auto";

           //playerhook.style.position = "fixed";
            jsplayer.style.left = ( stageWidth/2 -vidWidth/2 )+ "px";
            jsplayer.style.top = ( stageHeight/2  -vidHeight/2 ) + "px";
             //document.getElementById('player').style.left =  "50%";
             //document.getElementById('player').style.top =  "50%";
           // console.log ( playerhook.style.left + " offsetTop");

            TweenLite.killTweensOf(  scrim );
            TweenLite.to(  scrim , .2 ,  { css:{  autoAlpha: .5 }  , delay: 0 , onComplete:openScrimCompleteHandler}   );

            TweenLite.killTweensOf(  jsplayer );
            TweenLite.to(  jsplayer , .2 ,  { css:{  autoAlpha: 1 }  , delay: .2 }   );

            //jsplayer.style.width = "100%";            
            //jsplayer.style.left =  -vidWidth/2 + "px";
            //jsplayer.style.top =  "200px";

           


    }
    function openScrimCompleteHandler()
    {

        addEventListeners();

    }


   



    
    

    function addEventListeners()
    {
        
       if( ProjectManagerView.isTouchDevice == false )
        {
              SwissArmyKnife.addEvent( 'mousedown' ,  scrim ,  videoBtnCloseClickHandler  );
       }else
        {
              SwissArmyKnife.addEvent( 'touchstart' ,  scrim ,  videoBtnCloseClickHandler  );

        }

        SwissArmyKnife.addEvent( 'resize' ,  window ,  resizeHandler );
       
       
        
    }

    

    function removeEventListeners()
    {
        if( ProjectManagerView.isTouchDevice == false )
        {
              SwissArmyKnife.removeEvent( 'mousedown' ,  scrim ,  videoBtnCloseClickHandler  );
       }else
        {
              SwissArmyKnife.removeEvent( 'touchstart' ,  scrim ,  videoBtnCloseClickHandler  );

        }

         SwissArmyKnife.removeEvent( 'resize' ,  window ,  resizeHandler );
       
    }

  
    function videoBtnCloseClickHandler()
    {
        closeView();

    }
    

   function resizeHandler()
   {
            var stageWidth = SwissArmyKnife.browserWidth();
            var stageHeight = SwissArmyKnife.browserHeight();
            
            jsplayer.style.left = ( stageWidth/2 -vidWidth/2 )+ "px";
            jsplayer.style.top = ( stageHeight/2  -vidHeight/2 ) + "px";

   }
  

     function resizeEvent( w, h )
    {
        if( isOpen == true )
        {

            var stageWidth = w;
            var stageHeight = h;
           
          
            
        }

    }

    function init() 
    {
          // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = "http://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          
             
    }

  
    function getIsOpen()
    {
        return isOpen;
    }

    function initDomPointers()
    {
        init(); 

        scrim = document.getElementById('js-scrim');
        jsplayer = document.getElementById('js-player');
        playerhook = document.getElementById('player');
       // var menuDiv = document.getElementById( "js-menuBox" ).offsetHeight;

       
    }


    function changeColor( colorObj )
    {
        
        //viewContainer.style.backgroundColor = colorObj.color0;
        
    }

 
      

     


      function onYouTubeIframeAPIReady() 
      {

        
        
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) 
      {
       // console.log( "player ready" )
        isPlayerReady = true;
        player.playVideo();
        //player.loadVideoById( youTubeId , 0 , 1 )
        //document.getElementById('player').style.visibility = "hidden"
      }

     
     
      function onPlayerStateChange(event) 
      {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 6000);
          done = true;
        }
      }


      function stopVideo() 
      {
        player.stopVideo();
      }
   

    
    initDomPointers();
    
    return {

    	// public functions
        
        init: init,
        resizeEvent: resizeEvent,
        openView: openView,
        closeView: closeView,
     
        getIsOpen:getIsOpen
        
        
        // public vars

       
    };

})();