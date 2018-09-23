class Sorter {
  constructor() {
    this.arr = [];

    this.comparator = function (a, b) {
      return a - b;
    };
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    this.sortArr = [];
    for (let i = 0; i < indices.length; i++) {
      this.sortArr.push(this.arr[indices[i]]);
    }
    this.sortArr.sort(this.comparator);
    indices.sort();
    for (let i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = this.sortArr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
