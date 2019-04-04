const randomInt = function (min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min) + min);
    return result;
}

const randomArrayResult = function (array) {
    const result = randomInt(0, array.length - 1);
    return array[result];
}


