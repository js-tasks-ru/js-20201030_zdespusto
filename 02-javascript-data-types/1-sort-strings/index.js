/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    switch (param) {
        case 'asc':
            return sortFunction(arr, 1);
        case 'desc':
            return sortFunction(arr, -1);
        default:
            return "param udefined";
    }

    function sortFunction(ar, ascOrdesc) {
        return [...ar].sort( (a, b) => 
            ascOrdesc * a.localeCompare(b, ['ru'], {caseFirst: "upper"}) ) ;
    }
    
}
