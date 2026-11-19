export function resolvePromise(prms, promiseState){
    promiseState.promise = prms // save the promise
    promiseState.data = null
    promiseState.error = null

    if (!prms){               //if the prms is null or false
        return;
    }   
    prms.then(answerACB).catch(errorACB) // Here we look at the promise and make a promise chain and try to catch if there is anything wrong or undifined.
     
    
    function answerACB(result){
        if( promiseState.promise === prms){
            promiseState.data = result
        }
    }

     function errorACB(err){
        if(promiseState.promise === prms){
            promiseState.error = err
        }
    }
    
}


