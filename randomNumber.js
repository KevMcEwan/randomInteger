const randomNumber = function (min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min) + min);
    return result;
}

const randomArrayResult = function(array){
const result = randomNumber(0, array.length - 1);
return array[result];
}


