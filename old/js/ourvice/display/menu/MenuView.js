var MenuView = (function() {

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
    
    var slideContainer ;
    var menuButton;
    var menuOpenBtn;

    var isSwipeEnabled = false;
    var startDragX = 0;
    var startDragY = 0;
    var distanceX = 0;
    var distanceY = 0;
    var openWidth = 0;
    var baseheight = 450;
    var variableWidth = 350;
    


    var preload;
    var loader;
    var manifest;
    var preloadid = 0;
    var isLoaded  = false;
    var manifestLength = 0;

    var jsLogo;

    var menuBtnArr = [];
    var menuNameData = [];
    
    var arrow;

    function openView() 
    {
        if( isOpen == false )
        {
            isOpen = true;
            addEventListeners();
            openWidth =   ( baseheight );
           // console.log( baseheight + " baseheight" )
            resizeEvent( ProjectManagerView.stageWidth , ProjectManagerView.stageHeight );
            TweenLite.killTweensOf( slideContainer  );
            //TweenLite.killTweensOf( ProjectManagerView.mainView );
            
           
            TweenLite.to( slideContainer  , .5 ,  {css:{  top:openWidth + "px"  }  , delay:0   }   );
           
            TweenLite.killTweensOf( arrow );    
            setOpacity( arrow , 0)        
            TweenLite.to( arrow  , .2 ,  {css:{  opacity : 1  }  , delay:.2   }   );
            arrow.style.backgroundPosition = "0 -39px";
           
        }

    }


    function closeView() 
    {
        if( isOpen == true )
        {
            isOpen = false;
            removeEventListeners();
            TweenLite.killTweensOf( slideContainer  );
           // TweenLite.killTweensOf( ProjectManagerView.mainView );
           
            TweenLite.to( slideContainer  , .5 ,  {css:{  top:"0px"  }  , delay:0 }   );

            TweenLite.killTweensOf( arrow );    
            setOpacity( arrow , 0)        
            TweenLite.to( arrow  , .2,  {css:{  opacity : 1  }  , delay:.2   }   );
            arrow.style.backgroundPosition = "0 0px";
            
            
        }

    }

    
    

    function addEventListeners()
    {
        
       // enableSwipeEvents();
       
        //SwissArmyKnife.addEvent( 'mousedown' , prevBtn ,  prevClickHandler );

        for ( var i=1; i< menuBtnArr.length ; i++)
        {
            var btn = menuBtnArr[ i ];
            btn.pid = i;

            if( ProjectManagerView.isTouchDevice == false )
            {
                SwissArmyKnife.addEvent( 'mousedown' ,  btn ,   btnMenuClickHandler   );
            }else
            {
                SwissArmyKnife.addEvent( 'touchstart' ,  btn ,  btnMenuClickHandler   );

            }
        }
       

        
    }

    function btnMenuClickHandler( e )
    {
        if (!e) var e = window.event;
        var target = (e.currentTarget) ? e.currentTarget : e.srcElement;
        var id = target.pid ;        

        ProjectManagerView.updateById( id )

    }

    function removeEventListeners()
    {
            var btn = menuBtnArr[ i ];
           
             for ( var i=0; i< menuBtnArr.length ; i++)
            {
             var btn = menuBtnArr[ i ];
                if( ProjectManagerView.isTouchDevice == false )
                {
                    SwissArmyKnife.removeEvent( 'mousedown' ,  btn ,   btnMenuClickHandler   );
                }else
                {
                    SwissArmyKnife.removeEvent( 'touchstart' ,  btn ,   btnMenuClickHandler    );

                }
            }
    }

    function setSelect( id )
    {
        var i;

        jsLogo.innerHTML = "<font id='testWidths' ><font>WINDWARD FLUTES " + "<font id='js-menuTextFade' color='#5a5a5a' > " + DataModelLunchBox.getMenuTitleById( id ) + "</font></font> "

        var tempWidth = document.getElementById('testWidths').offsetWidth

        var fadeText = document.getElementById('js-menuTextFade' );

        TweenLite.killTweensOf( fadeText );    
        setOpacity( fadeText , 0)        
        TweenLite.to( fadeText  , .1 ,  {css:{  opacity : 1  }  , delay:.1   }   );

        TweenLite.killTweensOf( arrow );    
        setOpacity( arrow , 0)        
        TweenLite.to( arrow  , .1 ,  {css:{  opacity : 1  }  , delay:.2   }   );
        
        arrow.style.left = tempWidth+ 30 +"px";
        arrow.style.display = "block";

       // console.log( tempWidth + " widthsss" )
        for ( i=1; i< menuBtnArr.length; i++)
        {
            var node = menuBtnArr[ i ];
            //console.log( i )
            if( i != id )
            {
                node.style.color =  "#333333";
            }else{
                node.style.color = "#e22a0c";

            }
        }

        setOpacity( document.getElementById('js-menuBarWhiteBox') ,  DataModelLunchBox.getMenuAlphasById( id )  );

    }

    function setOpacity( testObj , value) 
    {
        testObj.style.opacity = value;
        testObj.style.filter = 'alpha(opacity=' + value + ')';
    }

    function enableSwipeEvents()
    {
       
        

    }

    function disableSwipeEvents()
    {
       

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
        
          // SwissArmyKnife.addEvent( 'mousedown', menuButton ,  toggleOpenViewHandler ); 
          if( ProjectManagerView.isTouchDevice == false )
          {
                SwissArmyKnife.addEvent( 'mousedown' ,  menuOpenBtn ,  menuOpenClickHandler );

          }else{
                SwissArmyKnife.addEvent( 'touchstart', menuOpenBtn , menuOpenClickHandler );
          }
             
    }

    function menuOpenClickHandler()
    {
        if( isOpen == false )
        {
            openView() ;
        }else{

            closeView() ;
        }

    }

    function getIsOpen()
    {
        return isOpen;
    }

    function initDomPointers()
    {

        var menuDiv = document.getElementById( "js-menuBox" ).offsetHeight;
        arrow = document.getElementById('js-arrow');
        setOpacity( arrow , 0 )

        

        slideContainer = document.getElementById( "js-slideShell" );
        menuOpenBtn = document.getElementById( "js-menuBar" );
        var shells = document.getElementById( "js-menuShell" );
        shells.style.zIndex =  999;

        var bar = document.getElementById( "js-heroBar" );
        bar.style.zIndex =  990;


        var dotMenu = document.getElementById( "js-dotBtnShell" );
        dotMenu.style.zIndex =  980;


        menuBtnArr = []

        menuNameData = DataModelLunchBox.getMenuBtnNames();

        var len = menuNameData.length;

        var col0 = document.getElementById( "js-menuCol0" );
        var col1 = document.getElementById( "js-menuCol1" );
        var col2 = document.getElementById( "js-menuCol2" );

        menuBtnArr = [ "" ];
        for( var i = 0 ; i < len ; i ++  )
        {
           
            var menugroup = menuNameData[i].menugroup;

            var btnDiv = document.createElement('div');
            btnDiv.className = "menuTextItem";
            btnDiv.id = "js-mid" + i;
             btnDiv.innerHTML = menuNameData[i].btnName;

            if( menugroup == "flutes" )
            {
                col0.appendChild( btnDiv );

            }else if( menugroup == "about" )
            {
                col1.appendChild( btnDiv );
            }else if( menugroup == "contact" )
            {
                col2.appendChild( btnDiv );
            }

            menuBtnArr.push ( btnDiv )


        }

        var h = document.getElementById( "js-menuBox" ).offsetHeight;
       // console.log(h+ ' menuDiv');
        baseheight = h+140;
        
        
        
      

        jsLogo = document.getElementById( "js-logo" )
        //reload();

    }


    function changeColor( colorObj )
    {
        
        //viewContainer.style.backgroundColor = colorObj.color0;
        
    }


    // loads stuffs
/*
    // Reset everything
    function reload() 
    {
            // If there is an open preload queue, close it.
            if (preload != null) { preload.close(); }

            // Reset the UI
            
            preloadid = 0;
            

            // Push each item into our manifest
           
            manifest = DataModelLunchBox.getMenuImageArray();
            manifestLength = manifest.length;
            // Create a preloader. There is no manfest added to it up-front, we will add items on-demand.
            preload = new PreloadJS();
            preload.onFileLoad = handleFileLoad;
            preload.onProgress = handleOverallProgress;
            preload.onFileProgress = handleFileProgress;
            preload.onError = handleFileError;
            preload.setMaxConnections(1);
            loadAll()
           

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
        var item = manifest[id].imageMenu;
        preload.loadFile(item);

        
    }

        // File complete handler
    function handleFileLoad(event) {

           
        var div = event.result;

        //div.addClass("completeLeft");       
        //div.className = "scroller ";
        div.id = "js" + preloadid+ "menuItem"  ;     
        //div.attr("id", "js" + preloadid+ "item" + pid );
        listView.appendChild(div);


        preloadid = preloadid +1; 
            
        if( preloadid == manifestLength )
        {
            isLoaded = true;
            console.log( " menu is loaded " );
            init();
        }

        //TweenLite.to( view , 0 ,  {css:{  scale:0 }  , delay: 0 }   );
            
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

    */  

    
    initDomPointers();
    
    return {

    	// public functions
        
        init: init,
        resizeEvent: resizeEvent,
        openView: openView,
        closeView: closeView,
        setSelect:setSelect,
        getIsOpen:getIsOpen
        
        
        // public vars

       
    };

})();