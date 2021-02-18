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
        return deweySearch(library, ddn, title, start, middle + 1)
    }
    else if (library[middle].ddn < ddn) {
        return deweySearch(library, ddn, title, middle + 1, end)
    }
}
console.log(deweySearch(library, 200.09, 'Test Three'))

/* ===== 4. Searching in a BST =====
** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?

postorder traversal: 14, 19, 15, 27, 25, 79, 90, 91, 89

2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

pre-order traversal: 8, 6, 5, 7, 10, 9, 11
*/

/* ===== 5. Implement different tree traversals =====
Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.
A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
*/
class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data)
        if(this.first === null) {
            this.first = node
        }
        if(this.last) {
            this.last.next = node
        }
        this.last = node
    }
    dequeue() {
        if(this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        if(node === this.last) {
            this.last = null
        }
        return node.value
    }
}
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }
    insert(key, value) {
        if(this.key === null) {
            this.key = key
            this.value = value
        } else if( key < this.key) {
            if(this.left == null) {
                this.left = new BinarySearchTree(key, value, this)
            } else {
                this.left.insert(key, value)
            }
        } else {
            if(this.right == null) {
                this.right = new BinarySearchTree(key, value, this)
            } else {
                this.right.insert(key, value)
            }
        }
    }
    find(key) {
        if(this.key == key) {
            return this.value
        } else if(key < this.key && this.left) {
            return this.left.find(key)
        } else if(key > this.key && this.right) {
            return this.right.find(key)
        } else {
            throw new Error('key error')
        }
    }
    remove(key) {
        if(this.key == key) {
            if(this.left && this.right) {
                const successor = this.right._findMin()
                this.key = successor.key
                this.value = successor.value
                successor.remove(successor.key)
            } else if(this.left) {
                this._replaceWith(this.left)
            } else if(this.right) {
                this._replaceWith(this.right)
            } else {
                this._replaceWith(null)
            }
        } else if(key < this.key && this.left) {
            this.left.remove(key)
        } else if(key > this.key && this.right) {
            this.right.remove(key)
        } else {
            throw new Error('key error')
        }
    }
    _findMin() {
        if(!this.left) {
            return this
        }
        return this.left._findMin()
    }
    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node
            } else if(this == this.parent.right) {
                this.parent.right = node
            }
            if(node) {
                node.parent = this.parent
            }
        } else {
            if(node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            } else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }
    bfs(values=[]) {
        const queue = new Queue()
        queue.enqueue(this)
        while(queue.length) {
            const node = queue.dequeue()
            values.push(node.value)
            if(node.left) {
                queue.enqueue(node.left)
            }
            if(node.right) {
                queue.enqueue(node.right)
            }
        }
        return values
    }
}
    const bst = new BinarySearchTree()
    bst.insert(25)
    bst.insert(15)
    bst.insert(50)
    bst.insert(10)
    bst.insert(24)
    bst.insert(35)
    bst.insert(70)
    bst.insert(4)
    bst.insert(12)
    bst.insert(18)
    bst.insert(31)
    bst.insert(44)
    bst.insert(66)
    bst.insert(90)
    bst.insert(22)
    
function preOrder(bst) {
    if(bst === null) {
        return
    }
    console.log(bst.key)
    if(bst.left) {
        preOrder(bst.left)
    }
    if(bst.right) {
        preOrder(bst.right)
    }
}
function inOrder(bst) {
    if(bst === null) {
        return
    }
    if(bst.left) {
        inOrder(bst.left)
    }
    console.log(bst.key)
    if(bst.right) {
        inOrder(bst.right)
    }
}
function postOrder(bst) {
    if(bst === null) {
        return
    }
    if(bst.left) {
        postOrder(bst.left)
    }
    if(bst.right) {
        postOrder(bst.right)
    }
    console.log(bst.key)
}
//console.log(preOrder(bst))//output: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
//console.log(inOrder(bst))//output: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
//console.log(postOrder(bst))//output: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

/* ===== 6. Find the next commanding officer =====
Suppose you have a tree representing a command structure of the Starship USS Enterprise.

               5Captain Picard
             /                \
    3Commander Riker       6Commander Data
      /         \               \
 2Lt. Cmdr.   4Lt. Cmdr.          8Lt. Cmdr.
 Worf        LaForge            Crusher
   /                           /
1Lieutenant                  7Lieutenant
security-officer            Selar

This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.
*/
function commandStructure() {
    const BST = new BinarySearchTree()
    BST.insert(5, 'Captain Picard')
    BST.insert(3, 'Commandar Riker')
    BST.insert(6, 'Commander Data')
    BST.insert(2, 'Lt. Cmdr. Worf')
    BST.insert(4, 'Lt. Cmdr. LaForge')
    BST.insert(8, 'Lt. Cmdr. Crusher')
    BST.insert(1, 'Lieutenant security-officer')
    BST.insert(7, 'Lieutenant Selar')
    return BST.bfs(BST)
}
console.log(commandStructure())

/* ===== Max Profit =====
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.
*/
function maxProfit(array) {
    let max = 0
    for(let i = 0; i < array.length; i++) {
        for(let k = i+1; k < array.length; k++) {
            if(array[k] - array[i] > max) {
                max = array[k] - array[i]
            }
        }
    }
    return max
}
console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))//output: 26