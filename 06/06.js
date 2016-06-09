function fizzbuzz(a){
    var result;
    if(a % 3 == 0 && a % 5 == 0){
        result = "fizzbuzz";
    } else if (a % 3 == 0){
        result = "fizz";
    } else if (a % 5 == 0){
        result = "buzz";
    } else {
        result = a
    }
    
    return result;
}