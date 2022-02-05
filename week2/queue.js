var queue = {
  item: [],
  enqueue(ele) {
    this.item.push(ele);
  },
  isEmpty() {
    return this.item.length == 0; // false
  },
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.item.shift();
  },
  front() {
    if (this.isEmpty()) {
      return "No Element";
    }
    return this.item[0];
  },
  print() {
    return this.item;
  },
  removeSomeElement(val) {
    let arr = [];

    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i] != val) {
        arr.push(this.item[i]);
      }
    }
    this.item = arr;
    return this.item;
  },
};
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
queue.enqueue(500);
queue.removeSomeElement(200);
console.log(queue.print());
