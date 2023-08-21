/**
 * Generates an answers object based on the fetched array from an API.
 * @param {Array} array - The array fetched from the API, That contains all the info.
 * @param {boolean} answers - If true, the returned array will contain correct answers; if false, the answers will be empty.
 * @returns {Object} An object containing answers based on the array and the answers flag.
 */
export function generateAnswersObject(array, answers) {
    const answersObject = {}
    array.map((element, index) => {
        answersObject[`answer${index + 1}`] = answers ? element.correct_answer : ""
    })
    return answersObject
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

// export function formatBooleanAnswer(value) {
//     const booleanStringified = value.toString()
//     // capitalize first letter
//     return booleanStringified.charAt(0).toUpperCase() + booleanStringified.slice(1);
// }