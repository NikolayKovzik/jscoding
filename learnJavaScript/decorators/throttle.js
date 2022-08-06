
function f(x) {
    console.log(x);
  }
  
  function throttle(fn, delay) {
    let flag = true;
    let nextArgs = null;
    let nextThis = null;
    return function rec() {
      if (flag) {   // если разрешено выполнение функции - выполняем
        flag = false;
        fn.apply(this, arguments);
        setTimeout(() => {
          flag = true;
          if (nextArgs) {
            rec.apply(nextThis, nextArgs);
            nextArgs = null;
            nextThis = null;
          }
        }, delay)
      } else { // если запрещено выполнение функции - сохраняем с помощью замыкания контекст и аргументы текущего вызова
        nextArgs = arguments;
        nextThis = this;
      }
    }
  }
  
  f = throttle(f, 1500);
  
  f(1);
  f(2);
  f(3);
  f(222222222222);
  f(222222222222); // выполняется
  
  setTimeout(() => f(6), 2000);
  setTimeout(() => f(7), 2100);
  setTimeout(() => f(8), 2200);
  setTimeout(() => f(9), 2300);
  setTimeout(() => f(10), 2400);
  setTimeout(() => f(11), 2500);
  setTimeout(() => f(999999), 3100); // выполняется
  