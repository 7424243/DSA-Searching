/* 1) Linear search
Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5, 
2) Binary search
Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
*/
import './App.css';
import React from 'react'
import DATA from './DATA'

function App() {

    const linearSearch = (DATA, value) => {
      for(let i = 0; i< DATA.length; i++) {
        if(DATA[i] == value) {
          return `Found ${value} in ${i + 1} tries`
        }
      }
      return `${value} not found in ${DATA.length} tries.`
    }

    const binarySearch = (DATA, value, start, end, numSearch) => {
      let starter = start === undefined ? 0 : start
      let ender = end === undefined ? DATA.length : end
      let searches = numSearch === undefined ? 0 : numSearch

      if(starter > ender) {
        return `${value} not found in ${DATA.length} tries.`
      }
      const index = Math.floor((starter + ender)/2);
      const item = DATA[index];
  
      console.log(starter, ender);
      if(item == value){
        return `Found ${value} in ${searches} tries`;
      }else if(item < value){
        searches++
        return binarySearch(DATA, value, index + 1, ender, searches);
      }else if(item > value){
        searches++
        return binarySearch(DATA, value, starter, index -1, searches);
      }
    }
    const handleLinearSubmit = (e) => {
      e.preventDefault()
      let input = e.target.numInput.value
      //alert(linearSearch(DATA, input))
      let sortedData = DATA.sort((a, b) => {
        return a-b
      })
      console.log(sortedData)
      alert(binarySearch(sortedData, input))
    }

   
      return (
        <div className="App">
      <form onSubmit={handleLinearSubmit}>
        <label htmlFor='inputData'>Input Data</label>
        <input id ='numInput' type='text' name='inputData'/>
        <button type='submit'>Submit</button>
      </form>
      </div>
    );
    
    
 

}

export default App;
