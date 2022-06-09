const removeFromArray = function (array, ...args) {
    return array.filter(element => {
        let shouldAddItem = true;
        args.forEach(arg => {
            if (element === arg) {
                shouldAddItem = false;
            }
        })
        return shouldAddItem;
    });
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2));

// Do not edit below this line
module.exports = removeFromArray;
