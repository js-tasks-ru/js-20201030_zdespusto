/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    const ar = string.split('');
    let count = 1 ;
    for (let i=0 ; i< ar.length; i++) {
        if (ar[i] === ar[i+1] ) {
            count++;
        } else {
            let diff = count - size;
            if (diff > 0) {
                let startCutting = i - diff;
                i = startCutting;
                count = 1;
                ar.splice(startCutting , diff)

            }  else {
                count = 1;
            }
        }
    }

    return ar.join(""); 

}
