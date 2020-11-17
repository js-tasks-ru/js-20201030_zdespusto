/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const properties = path.split('.');

    const myFunc = (obj) => {
        
        const result = properties.reduce( (accum, currentValue) => ( accum && accum[currentValue] !== 'undefined' ) ? accum[currentValue] : undefined , obj );
        return result;
    }

    return myFunc;



}
