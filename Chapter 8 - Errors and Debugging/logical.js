const logical = () => {
  let num = 5;
  if ((num = 10)) {
    console.log(num);
  } else {
    console.log("This will never be printed");
  }
};

module.exports = logical;
