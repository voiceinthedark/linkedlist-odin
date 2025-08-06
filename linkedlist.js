// @ts-check
import Node from "./Node.js";

/**
 * @class LinkedList
 * @classdesc A linked list class to hold a list of nodes
 * */
class LinkedList {
  /** @type {Node| null} */
  #currentNode;
  /** @type {number} */
  #size;
  /** @type {Node | null} */
  #head;
  /** @type {Node | null} */
  #tail;

  constructor() {
    this.#currentNode = null;
    this.#size = 0
    this.#head = null
    this.#tail = null
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head
  }

  get tail() {
    return this.#tail
  }

  get currentNode() {
    return this.#currentNode
  }

  /**
     * @method to add a value to the front of the list
     * @param {any} val  */
  append(val) {
    if (!this.#head) {
      this.#head = new Node(val, null);
      this.#currentNode = this.#head;
      this.#tail = this.#currentNode;
      this.#head.nextNode = this.#tail;
      this.#size++
    } else {
      const prevNode = this.#currentNode;
      this.#currentNode = new Node(val, null);
      if (prevNode) {
        prevNode.nextNode = this.#currentNode;
      }
      this.#tail = this.#currentNode;
      this.#size++
    }
  }

}

/** @module LinkedList */
export default LinkedList;
