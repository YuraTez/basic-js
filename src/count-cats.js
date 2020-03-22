module.exports = function countCats(backyard) {
let namber=0;
    for(let j = 0; j < backyard.length; j++) {
        for(let n = 0; n < backyard[j].length; n++) {
            if ("^^" === backyard[j][n])
                namber= namber+1;
        }
    }


return namber;
};

