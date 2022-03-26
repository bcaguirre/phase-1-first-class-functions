// receivesAFunction should: 
//take a callback function as an argument,
//call the callback function,
//it dosen't matter what this function returns, so long as it calls the callback function!

function receivesAFunction(callback){
    callback();
}

//returnsANamedFunction should:
//take no arguments, and return a named function

function returnsANamedFunction(){
    return returnsANamedFunction
}

//returnsAnAnonymousFunction should:
//take no arguments, return an anonymous function

function returnsAnAnonymousFunction(){
      return () => "";
  }





//function returnsAnAnonymousFunction(){
  //  return returnsAnAnonymousFunction
//}
