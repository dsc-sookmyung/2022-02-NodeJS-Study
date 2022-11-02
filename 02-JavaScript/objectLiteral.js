// old
var sayNode = function () {
  console.log("Node");
};

var es = "ES";
var oldObject = {
  sayJS: function () {
    console.log("js");
  },
  sayNode: sayNode,
};

oldObject[es + 6] = "fantastic";
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

// new
const newObject = {
  sayJS() {
    console.log("js");
  },
  sayNode,
  [es + 6]: "fantastic",
};

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
