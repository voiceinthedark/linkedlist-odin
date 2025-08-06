import LinkedList from './linkedlist.js';
import Node from './Node.js';

// Helper for basic assertions if a test runner isn't available
function assert(condition, message) {
  if (!condition) {
    console.error(`Assertion Failed: ${message}`);
    throw new Error(message);
  }
  // console.log(`Assertion Passed: ${message}`);
}

console.log('--- Running LinkedList Tests ---');

// Test Case: LinkedList constructor
(function testConstructor() {
  console.log('\nTesting Constructor...');
  const list = new LinkedList();
  assert(list.size === 0, 'Constructor: Initial size should be 0');
  assert(list.head === null, 'Constructor: Initial head should be null');
  assert(list.tail === null, 'Constructor: Initial tail should be null');
  assert(list.currentNode === null, 'Constructor: Initial currentNode should be null');
  console.log('Constructor tests passed.');
})();

// Test Case: append method
(function testAppend() {
  console.log('\nTesting append method...');
  const list = new LinkedList();

  // Append to empty list
  list.append(10);
  assert(list.size === 1, 'Append: Size should be 1 after first append');
  assert(list.head?.value === 10, 'Append: Head value should be 10 after first append');
  assert(list.tail?.value === 10, 'Append: Tail value should be 10 after first append');
  assert(list.head?.nextNode === null, 'Append: First node nextNode should be null');

  // Append to non-empty list
  list.append(20);
  assert(list.size === 2, 'Append: Size should be 2 after second append');
  assert(list.head?.value === 10, 'Append: Head value should remain 10');
  assert(list.tail?.value === 20, 'Append: Tail value should be 20');
  assert(list.head?.nextNode?.value === 20, 'Append: Head nextNode should point to 20');

  list.append(30);
  assert(list.size === 3, 'Append: Size should be 3 after third append');
  assert(list.tail?.value === 30, 'Append: Tail value should be 30');
  assert(list.head?.nextNode?.nextNode?.value === 30, 'Append: Second node nextNode should point to 30');
  console.log('Append tests passed.');
})();

// Test Case: prepend method
(function testPrepend() {
  console.log('\nTesting prepend method...');
  const list = new LinkedList();

  // Prepend to empty list (should behave like append)
  list.prepend(50);
  assert(list.size === 1, 'Prepend: Size should be 1 after first prepend');
  assert(list.head?.value === 50, 'Prepend: Head value should be 50 after first prepend');
  assert(list.tail?.value === 50, 'Prepend: Tail value should be 50 after first prepend');

  // Prepend to non-empty list
  list.prepend(40);
  assert(list.size === 2, 'Prepend: Size should be 2 after second prepend');
  assert(list.head?.value === 40, 'Prepend: Head value should be 40');
  assert(list.tail?.value === 50, 'Prepend: Tail value should remain 50');
  assert(list.head?.nextNode?.value === 50, 'Prepend: Head nextNode should point to 50');

  list.prepend(30);
  assert(list.size === 3, 'Prepend: Size should be 3 after third prepend');
  assert(list.head?.value === 30, 'Prepend: Head value should be 30');
  assert(list.head?.nextNode?.value === 40, 'Prepend: New head nextNode should be 40');
  console.log('Prepend tests passed.');
})();

// Test Case: at method
(function testAt() {
  console.log('\nTesting at method...');
  const list = new LinkedList();
  list.append(100);
  list.append(200);
  list.append(300); // List: 100 -> 200 -> 300

  assert(list.at(0) === 100, 'At: Should return first element (index 0)');
  assert(list.at(1) === 200, 'At: Should return middle element (index 1)');
  assert(list.at(2) === 300, 'At: Should return last element (index 2)');
  assert(list.at(list.size - 1) === 300, 'At: Should return last element using size - 1');

  // Test out of bounds
  assert(list.at(3) === null, 'At: Should return null for out-of-bounds index (too high)');
  assert(list.at(-1) === null, 'At: Should return null for negative index');

  // Test with empty list
  const emptyList = new LinkedList();
  assert(emptyList.at(0) === null, 'At: Should return null for empty list at index 0');
  assert(emptyList.at(5) === null, 'At: Should return null for empty list at any index');

  console.log('At tests passed.');
})();

// Test Case: pop method
(function testPop() {
  console.log('\nTesting pop method...');

  // Pop from multi-element list
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3); // List: 1 -> 2 -> 3

  let poppedValue = list.pop();
  assert(poppedValue === 3, 'Pop: Should return the last value (3)');
  assert(list.size === 2, 'Pop: Size should be 2 after popping one element');
  assert(list.head?.value === 1, 'Pop: Head should still be 1');
  assert(list.tail?.value === 2, 'Pop: Tail should now be 2');
  assert(list.tail?.nextNode === null, 'Pop: New tail nextNode should be null');

  poppedValue = list.pop();
  assert(poppedValue === 2, 'Pop: Should return the new last value (2)');
  assert(list.size === 1, 'Pop: Size should be 1');
  assert(list.head?.value === 1, 'Pop: Head should still be 1');
  assert(list.tail?.value === 1, 'Pop: Tail should now be 1');
  assert(list.tail?.nextNode === null, 'Pop: Single node nextNode should be null');

  // Pop from single-element list
  poppedValue = list.pop();
  assert(poppedValue === 1, 'Pop: Should return the last value (1)');
  assert(list.size === 0, 'Pop: Size should be 0 after popping last element');
  assert(list.head === null, 'Pop: Head should be null after popping last element');
  assert(list.tail === null, 'Pop: Tail should be null after popping last element');

  // Pop from empty list
  poppedValue = list.pop();
  assert(poppedValue === null, 'Pop: Should return null when popping from an empty list');
  assert(list.size === 0, 'Pop: Size should remain 0 for empty list');

  console.log('Pop tests passed.');
})();

// Test Case: contains method
(function testContains() {
  console.log('\nTesting contains method...');
  const list = new LinkedList();
  list.append('apple');
  list.append('banana');
  list.append('orange'); // List: apple -> banana -> orange

  assert(list.contains('banana') === true, 'Contains: Should find existing value "banana"');
  assert(list.contains('apple') === true, 'Contains: Should find existing value "apple" (first)');
  assert(list.contains('orange') === true, 'Contains: Should find existing value "orange" (last)');
  assert(list.contains('grape') === false, 'Contains: Should not find non-existing value "grape"');

  // Test with empty list
  const emptyList = new LinkedList();
  assert(emptyList.contains('anything') === false, 'Contains: Should return false for empty list');

  // Test with numbers
  const numList = new LinkedList();
  numList.append(10);
  numList.append(20);
  assert(numList.contains(10) === true, 'Contains: Should find existing number 10');
  assert(numList.contains(15) === false, 'Contains: Should not find non-existing number 15');

  console.log('Contains tests passed.');
})();

(function testFind() {
  console.log('\nTEsting find method...')
  const list = new LinkedList()
  list.append('apple')
  list.append('banana');
  list.append('orange');

  assert(list.find("apple") === 0, "Find: should find value apple at index 0")
  assert(list.find("banana") === 1, "Find: should find value banana at index 1")
  assert(list.find("mango") === null, "Find: should not find value mango at all")

  // test empty list
  const emptyList = new LinkedList();
  assert(emptyList.find('something') === null, "Find: should return null for empty list")

  //test with numbers
  //
  const numList = new LinkedList();
  numList.append(33)
  numList.append(55)
  numList.append(44)

  assert(numList.find(55) === 1, "find: should find value 55 at index 1")
  assert(numList.find(66) === null, "find: should not find 66 and return null")

  console.log("Find tests passed.")
})();

// Test toString method
(function testToString(){
  console.log('\nTesting the toString method...')
  const list = new LinkedList();
  list.append('apple')
  list.append('banana');
  list.append('orange');

  assert(list.toString() === `( apple ) -> ( banana ) -> ( orange ) -> null`, "toString: should return a correct implementaion of the toString method")

  const emptyList = new LinkedList()

  assert(emptyList.toString() === 'null', 'toString: should return "null" on an empty list')

  console.log('toString tests passed')
})();

console.log('\nAll LinkedList tests completed.');
