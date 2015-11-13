function each(collection, callback){
    if(Array.isArray(collection)){
        for(var i =0; i < collection.length; i++){
            callback(collection[i]);
        }
    }else{
        for(var property in collection){
            callback(collection[property]);
        }
    }
}

function map(collection,callback){
    var result=[];
    each(collection, function(element){
        result.push(callback(element));
    });
    return result;
}

map([1,2,3], function(a){
    return a += 1;
});

map([1,2,3],function(b){
    return b *=2
});
