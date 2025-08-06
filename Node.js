// @ts-check

/**
 * @class Node
 * @classdesc A node that holds data and pointer to next node
 * */
class Node {
  /** @type {any} */
  #value;
  /** @type {Node | null | undefined} */
  #nextNode;

  /**@constructor
   * @param {any} val 
   * @param {Node | null | undefined} next 
   * */
  constructor(val, next) {
    this.#value = val ?? null;
    this.#nextNode = next ?? null;
  }

  get value() {
    return this.#value;
  }
  set value(val) {
    this.#value = val;
  }

  get nextNode() {
    return this.#nextNode
  }
  set nextNode(val) {
    this.#nextNode = val;
  }
}

export default Node;
