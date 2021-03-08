module.exports = class DepthCalculator {
    calculateDepth( arr ) {
       let cnt = 1;
       let arrNew = arr.flat(Infinity);
       arrNew.forEach((el)=>{
           if (String(el) === "["){
                cnt+= 1;
           }
       });
        return cnt;
    }
};