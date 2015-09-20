var CircleArray = require('./index.js');

//var circle = new CircleArray([{value: 1},{value: 2},{value: 3},{value: 4}]);
var circle = new CircleArray(3);


circle.add({value: 1});
circle.add({value: 2});
circle.add({value: 3});
circle.add({value: 4});
circle.add({value: 5});
circle.add({value: 6});

console.log("Current element: " + circle.currentElement().value);

console.log("____________________________________");

console.log("Array current size: " + circle.size());

console.log("____________________________________");

console.log("Array max size: " + circle.maxSize());

console.log("____________________________________");

console.log("Array is isEmpty? " + circle.isEmpty());

console.log("____________________________________");

console.log("Array is full? " + circle.isFull());

console.log("____________________________________");

console.log("Current array " + circle.print());

console.log("____________________________________");

circle.prev();

console.log("Move to prev " + circle.currentElement().value);

console.log("____________________________________");

circle.prev();

console.log("Move to prev " + circle.currentElement().value);

console.log("____________________________________");

circle.next();

console.log("Move to next " + circle.currentElement().value);

console.log("____________________________________");

circle.next();

console.log("Move to next " + circle.currentElement().value);

console.log("____________________________________");

circle.next();

console.log("Move to next " + circle.currentElement().value);



