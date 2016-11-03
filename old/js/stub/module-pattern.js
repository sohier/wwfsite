var MyClass = (function() {

    // Just so you can see what "this" refers to. It's the global window object.
    // Never attach anything to "this" because then it's a global var/method
    // and you start polluting the global namespace.
    console.log(this);

    // This pattern gives you closure privacy. This is self executing which
    // means you don't have to use the new operator but this is a static/singleton
    // class. Only one instance is created.

    // All methods are private. You don't have to worry about scoping or using
    // "this". If you were to trace out "this", you would get an instance of
    // the global window object. Never use "this" within the module pattern.
    function foo() {
        console.log('foo() has been called');
    }

    function poo() {
        console.log('poo() has been called');
    }

    // Because I don't have public variables, I can just return an object instead
    // of an object api var. Whether you return an object api var or just return
    // an object, it's the same thing and a matter of preference.
    return {
        foo: foo,
        poo: poo
    };

})();


var MyClass = (function() {

    // Just so you can see what "this" refers to. It's the global window object.
    // Never attach anything to "this" because then it's a global var/method
    // and you start polluting the global namespace.
    console.log(this);

    // This pattern gives you closure privacy. This is self executing which
    // means you don't have to use the new operator but this is a static/singleton
    // class. Only one instance is created.

    // Everything public gets attached to the public api object.
    var api = {};

    // I need public variables so I have to attach to the public api.
    api.name = 'Destin';
    api.last = 'Young';

    // All methods are private. You don't have to worry about scoping or using
    // "this". If you were to trace out "this", you would get an instance of
    // the global window object. Never use "this" within the module pattern.
    function foo() {
        console.log('foo() has been called');
    }

    function poo() {
        console.log('poo() has been called');

        console.log('name: ' + api.name);
        console.log('last: ' + api.last);
    }

    // I'm attaching my foo() and poo() methods to the api because I want them
    // to be public. If I don't want them to be public I can just remove from
    // the api without modifying the entire code base.
    api.foo = foo;
    api.poo = poo;

    // Just like above I have to return an object with the methods/properties
    // I want to be exposed publicly. I'm using an api object so I can return
    // that. All properties and methods that have been attached are now public
    // to the outside world.
    return api;

})();