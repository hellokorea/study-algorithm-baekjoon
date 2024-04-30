const fs = require("fs");
// Make sure to replace "../example.txt" with the correct path to your input file
const readData = fs.readFileSync("../example.txt").toString().trim().split("\n");
const N = parseInt(readData[0], 10);
const input = readData.slice(1);

class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(data) {
    this.inStack.push(Number(data));
  }

  pop() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.length > 0 ? this.outStack.pop() : -1;
  }

  size() {
    return this.inStack.length + this.outStack.length;
  }

  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0 ? 1 : 0;
  }

  front() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.length > 0 ? this.outStack[this.outStack.length - 1] : -1;
  }

  back() {
    if (this.inStack.length > 0) {
      return this.inStack[this.inStack.length - 1];
    }
    return this.outStack.length > 0 ? this.outStack[0] : -1;
  }
}

const queue = new Queue();
let result = [];

input.forEach((command) => {
  const parts = command.split(" ");
  const cmd = parts[0];
  const value = parts.length > 1 ? parts[1] : null;
  switch (cmd) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      result.push(queue.pop());
      break;
    case "size":
      result.push(queue.size());
      break;
    case "empty":
      result.push(queue.empty());
      break;
    case "front":
      result.push(queue.front());
      break;
    case "back":
      result.push(queue.back());
      break;
    default:
      break;
  }
});

console.log(result.join("\n"));
