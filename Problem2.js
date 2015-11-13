var numbers = [30, 11, 40, 23, 12];


function addList(array){
    var newArr=[];
    var strArr =[" Steph Curry", " Klay Thompson", " Harrison Barnes", " Draymond Green", " Festus Ezili"];
    for (var i= 0; i < arr.length; i++){
        newArr.push(array[i] + strArr[i]);
    }
    return newArr;
}

function modArray(an_array, a_function) {

    if(typeof a_function != "function") {
        return "No callback or not a function";
    }
    else {
        return a_function(an_array);
    }
}

modArray(numbers, addList);
