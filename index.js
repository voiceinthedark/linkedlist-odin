import LinkedList from "./linkedlist.js";

const ll = new LinkedList();

ll.append(3)
ll.append(5)

// console.log(`linked list size: ${ll.size}`) // 2
// console.log(`current node: ${ll.currentNode.value}`) // 5
// console.log(`head node: ${ll.head.value}`) // 3
// console.log(`tail node: ${ll.tail.value}`) // 5
// console.log(`head.next ${ll.head.nextNode}`) // currentNode/tail TODO
// console.log(`tail.next ${ll.tail.nextNode}`) // null
// console.log(`current.next ${ll.currentNode.nextNode}`) // null
// console.log(`tail == current ${ll.tail == ll.currentNode}`); // true
// console.log(`tail === current ${ll.tail === ll.currentNode}`); // true


ll.append(7)

// console.log(`tail now ${ll.tail.value}`) // 7
//
// console.log(`at 2: ${ll.at(2)}`) // return 7
// console.log(`at 6: ${ll.at(6)}`) // null
// console.log(`at negative ${ll.at(-4)}`) // error

console.log(`pop(): ${ll.pop()}`) // 7
console.log(`size: ${ll.size}`) // 2

console.log(`contains 7? ${ll.contains(7)}`) // true
console.log(`contains 777? ${ll.contains(777)}`) // false

ll.insertAt(555, 1);
console.log(ll.toString())

console.log(ll.removeAt(1)) // 555
console.log(ll.toString())
console.log(ll.removeAt(0)) // 3
console.log(ll.toString()) // ( 5 ) -> null
