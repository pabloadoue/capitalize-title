/**
 * capitalizeTitle
 * Given a string, capitalize the first letter of each word.
 *
 * @name zeroFill
 * @function
 * @param {string} input The input string.
 * @return {string}
 */

export default function capitalizeTitle (input:string, skip?:string[], force?:string[]): string {
    const splited = input.split(' ');
    const result: string[] = [];

    let dontCapitalize = ['de', 'del', 'la', 'De', 'Del', 'La', 'DE', 'LA', 'dE'];
    if(skip){
        dontCapitalize = skip;
    }
    let alwaysCapitalize = [
        'sa',
        'cv',
        'c.v.',
        'c.v',
        'C.v',
        'C.v.',
        'c.V',
        'cV',
        'Cv',
        's.a.',
        'S.a.',
        's.A.',        
        'SA',
        'S.A.',
        'SRL',
        'S.R.L.',
        'S.A.S.',
        'SAS',
        'S.A.S',
        'S.A',
        'S.A.',
        'S.R.L',
        'SRL',
        'S.R.L.',
        'S.A.S',
        'SAS',
        'S.A.S.',
        'ILX',
        'MDX',
        'RDX',
        'TLX',
        'MG',
        'BMW',
    ];
    if(force){
        alwaysCapitalize = force;
    }

    // Itterate thru each word, capitalize the first letter and add the rest of the word in lowercase to the result variable
    splited.map(word => {
        if (dontCapitalize.includes(word) || alwaysCapitalize.includes(word)) {
            if (dontCapitalize.includes(word)) {
                result.push(word.toLowerCase());
            } else if (alwaysCapitalize.includes(word)) {
                result.push(word.toUpperCase());
            }
        } else {
            const firstLetter = word.charAt(0).toUpperCase();
            const restOfWord = word.slice(1).toLowerCase();
            result.push(`${firstLetter}${restOfWord}`);
        }
    });

    return result.join(' ');
}