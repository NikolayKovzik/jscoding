function multiFilter (...funcs) {
  return (item) => funcs.reduce((res, func) => res === false ? false : func(item), true);
};