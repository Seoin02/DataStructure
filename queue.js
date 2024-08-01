const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  Queue.prototype = {
    constructor: Queue,
    enqueue(value) {
      return this.array.push(value);
    },
    dequeue() {
      return this.array.shift();
    },
  };
  return Queue;
})();

const queue = new Queue([1, 2]);
