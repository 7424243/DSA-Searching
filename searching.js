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