function receivesAFunction(callback) {
    return callback();}
    function returnsANamedFunction() { return function () { return "I'm a named function!"; }; }
          
      function returnsAnAnonymousFunction() { return function() { return 'I am an anonymous function'; }; }