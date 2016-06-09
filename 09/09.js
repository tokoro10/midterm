function countDigits(number){
    var result;
    if(number < 0){
        result = -1;
    } else {
        number = Math.floor(number);
        result = String(number).length;
    }
    return result;
}