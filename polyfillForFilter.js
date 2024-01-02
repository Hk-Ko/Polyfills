//pollyfill for filter()

Array.prototype.myFilter = function (cb) {
  temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const nums = [1, 2, 3, 4, 5];

const moreThanTwo = nums.myFilter((num) => {
  return num > 2;
});

console.log(moreThanTwo);
