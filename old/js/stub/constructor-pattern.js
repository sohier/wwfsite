function MyClass() {

    // Reference to "this" classes. This will be used internally only when
    // attempting to reference any public methods or properties.
    var scope = this;

    // This is public because I'm attaching it to 'this' class.
    this.publicVar = 'Public';

    // This is private because I'm not attaching it to "this" class.
    var privateVar = 'Private';

    // This is public because I'm attaching it to 'this' class.
    this.publicMethod = function() {
        console.log('publicMethod() has been called');

        privateMethod();
    };

    // This is public because I'm attaching it to 'this' class.
    this.publicMethodFoo = function() {
        console.log('publicMethodFoo() has been called');
    };

    // This is private because I'm not attaching it to "this" class.
    function privateMethod() {
        // I want to call the public method. I could just do this.publicMethodFoo()
        // but using "this" could cause some scoping issues. It's cleaner to
        // call with "scope" instead of "this". That ensures me I'm always
        // using the right context/scope.
        scope.publicMethodFoo();

        // I can call my public vars the same way I did with the public methods
        // using the "scope".
        console.log('publicVar: ', scope.publicVar);
        console.log('privateVar: ', privateVar);
    }
}

var myclass = new MyClass();
myclass.publicMethod();