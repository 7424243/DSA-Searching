/* ===== 1. How many searches? =====
Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
1. 3, 5, 6, 8, 11, 12, 14, 15, 17, 18: middle of array = 12; 8<12 so will look in lower half of array
2. 3, 5, 6, 8, 11: middle of array = 6; 8>6 so will look in upper half of array
3. 8, 11; returns 11: 8 < 11 so will look in lower half of array
4. 8 = 8 so returns

Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.
1. 3, 5, 6, 8, 11, 12, 14, 15, 17, 18: middle of array = 12; 16>12 so will look in upper half of array
2. 14, 15, 17, 18: middle of array = 17; 16<17 so will look in lower half of array
3. 14, 15: middle of array = 15; 15<16
4. start>end so return -1
*/

/* ===== 2. Adding a React UI =====
For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.
*/
//See ReactUI folder for completed code

/* ===== 3. Find a book =====
Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.
*/
const library = [
    {ddn: 100.594, titles: ['Test One', 'Test Two']},
    {ddn: 200.09, titles: ['Test Three', 'Test Four']},
    {ddn: 300.03984, titles: ['Test Five', 'Test Six']},
    {ddn: 400.2, titles: ['Test Seven', 'Test Eight']},
    {ddn: 500.45, titles: ['Test Nine']},
    {ddn: 600.675, titles: ['Test Ten', 'Test Eleven', 'Test Twelve']},
    {ddn: 700.864, titles: ['Test Thirteen', 'Test Fourteen']},
    {ddn: 800.6, titles: ['Test Fifteen']},
    {ddn: 900.345, titles: ['Test Sixteen', 'Test Seventeen']}
]
function deweySearch(library, ddn, title, start=0, end) {
    end = end === undefined ? library.length : end
    const middle = Math.floor((start+end) / 2)
    if (library[middle].ddn === ddn) {
        let currentTitle
        let i = 0
        while (currentTitle !== title) {
            if (library[middle].titles.length < i) {
                return 'book is checked out';
            }
            else if (library[middle].titles[i] === title) {
                currentTitle = library[middle].titles[i]
            }
            else {
                i++;
            }
        }
        return `${currentTitle} found`
    }
    else if(library[middle].ddn > ddn) {
        return deweySearch(library, ddn, title, start, middle = 1)
    }
    else if (library[middle].ddn < ddn) {
        return deweySearch(library, ddn, title, middle + 1, end)
    }
}
console.log(deweySearch(library, 200.09, 'Test Three'));