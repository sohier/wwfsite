var MyClass = function () {

    'use strict';
    
    var scope = this;  
    var publicVar = 'Public for tracing sakes';  
    var privateVar = 'Private';

    

    
    function publicMethodFoo() 
    {
        console.log('publicMethodFoo() has been called');
        console.log('publicVar : ' + publicVar );
    };

    //
    function privateMethod() 
    {
        console.log('privateVar: ' +  privateVar);
        publicMethodFoo();
    }




    function setPrivateVar( string ) 
    {
        privateVar = string

    }

    function setPublicVar( string ) 
    {
        publicVar = string

    }

    

    return {

        // return getter and setter methods, no varibales, variables are accessible through getter and setter funtion listed in the return object ONLY!
        privateMethod: privateMethod,
        setPrivateVar: setPrivateVar,
        setPublicVar: setPublicVar,

        
    };
}

