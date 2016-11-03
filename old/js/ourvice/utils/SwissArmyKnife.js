var SwissArmyKnife = (function() {
    'use strict';
    // Just so you can see what "this" refers to. It's the global window object.
    // Never attach anything to "this" because then it's a global var/method
    // and you start polluting the global namespace.
  

    // This pattern gives you closure privacy. This is self executing which
    // means you don't have to use the new operator but this is a static/singleton
    // class. Only one instance is created.

    // All methods are private. You don't have to worry about scoping or using
    // "this". If you were to trace out "this", you would get an instance of
    // the global window object. Never use "this" within the module pattern.
    var retina;
    var baseURL = "assets/reg/";

    var browserType = "";
    


    function determineScreenDPI()
    {
        retina = window.devicePixelRatio > 1 ? true : false;
        //alert( retina )
        if( retina == true )
        {
            baseURL = "assets/retina/";

        }
    }

    function getBaseURL()
    {
        return baseURL;
    }

    function doesDeviceSupportTouch() {
        return !!('ontouchstart' in window);
    }


    // wrappers for events diff between ie and every other browser.
    function addEvent( evnt , elem , func)
    {
        evnt = evnt.replace('on','');
        if(func)
        {
            if(elem.addEventListener)
            {
                elem.addEventListener(evnt,func,false);
            }
            else if(elem.attachEvent)
            {
                elem.attachEvent("on"+evnt,func);
                
            }
        }
    }


    function removeEvent( evnt , elem , func )
    {
        evnt = evnt.replace('on','');
        if(func)
        {
            if(elem.addEventListener)
            {
                elem.removeEventListener(evnt,func,false);
            }
            else if(elem.attachEvent)
            {
                elem.detachEvent("on"+evnt,func);
                
            }
        }
    }

    function isIE()
    {

        var isIe = !!window.ActiveXObject;
        //alert( isIe + "is IE boolean  ")
        return isIe;

    }

    function setBackground( displayItem , imageURL ) 
    {
        displayItem.style.background  ='url(' + imageURL + ')';       
    }

    
    


    function browserWidth() 
    {
       
        return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
        
    }

    function browserHeight() 
    {
        return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
    }

    function init()
    {
        determineScreenDPI();
        isIE();
    }

    
    
    init();
        
    // Because I don't have public variables, I can just return an object instead
    // of an object api var. Whether you return an object api var or just return
    // an object, it's the same thing and a matter of preference.
    return {

    	// public functions
        getBaseURL: getBaseURL,
        doesDeviceSupportTouch: doesDeviceSupportTouch,
        addEvent: addEvent,
        removeEvent: removeEvent,
        browserWidth: browserWidth,
        browserHeight: browserHeight,
        isIE: isIE,
        setBackground: setBackground,
        // public vars

        retina: retina
    };

})();