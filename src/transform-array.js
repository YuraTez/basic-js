module.exports = function transform( arr ) {
  if(!Array.isArray(arr)){
      throw Error();
  }
   const arrNew = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-next":
                i++;
                break;
            case "--discard-prev":
                if (arrNew.length !== 0 && arr[i - 2] !== '--discard-next') {
                    arrNew.pop();
                }
                break;
            case "--double-next":
                if (i !== arr.length - 1) {
                    arrNew.push(arr[i + 1]);
                }
                break;
            case "--double-prev":
                if (arrNew.length !== 0 && arr[i - 2] !== '--discard-next') {
                    arrNew.push(arr[i - 1])
                }
                break;
            default:
                arrNew.push(arr[i])
                break;
        }
    }
    return arrNew;

};
