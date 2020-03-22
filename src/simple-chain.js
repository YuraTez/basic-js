const chainMaker = {
    arr: [],
    getLength() {
        this.arr.length;
        return this;
        // remove line with error and write your code here
    },
    addLink(value) {
        this.arr.push(`( ${value} )`);
        return this;
        // remove line with error and write your code here
    },
    removeLink(position) {
        if( position >= this.arr.length || position < 0 || position % 1 != 0 || (typeof position !=="number")) {
            this.arr = [];
            throw new Error("Wrong position");

        }
        this.arr.splice((position -1), 1);
        return this;
        // remove line with error and write your code here
    },
    reverseChain() {
        this.arr.reverse();
        return this;
    },
    finishChain() {
        let result = this.arr.join("~~");
        this.arr = [];
        return result;
        // remove line with error and write your code here
    }
};

module.exports = chainMaker;
