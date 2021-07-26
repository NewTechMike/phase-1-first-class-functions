function receivesAFunction(callback){
    return callback();
}


function returnsANamedFunction(){
    return function something(){

    };
}    

function returnsAnAnonymousFunction(){
    return function(){};
}