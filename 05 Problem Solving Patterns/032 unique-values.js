// checks if string is empty
// checks if temp is a number

function evenOdd(numberString) {
    if(!numberString) return false;
    let temp = 0;
    let result =[];
    for(let number of numberString) {
        if(!number) {
            temp = temp + number;
        }
        else if(!isNaN(temp)) {
        result.push(Number(temp)%2);
        }
    }
    return result;
}