let btn = document.getElementById("btn");
let count = 0;

let throttle = function (cb, delay) {
  let flag = true;

  return function () {
    context = this;
    args = arguments;

    if (flag) {
      cb(context, [...args]);
      flag = false;
      setTimeout(function () {
        flag = true;
      }, delay);
    }

   
  };
};

btn.addEventListener("click", throttle(function () {
  console.log(" count", ++count);
},300));
