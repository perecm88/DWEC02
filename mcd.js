 let mcd = (x, y) => {
        if (y === 0) return x;
        return mcd(y, x % y);

};
export {mcd};

