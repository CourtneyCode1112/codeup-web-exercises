let tableMultipliedByTwo = function() {
    let startNum = 1;
    let endNum = startNum * 2;
    let i = 0;
    while (i <= 15) {
        console.log(endNum);
        endNum += endNum;
        i++;
    }
}
tableMultipliedByTwo();