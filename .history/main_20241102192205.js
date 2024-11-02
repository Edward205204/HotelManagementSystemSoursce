let a = null;
let b = "Hello";
let result = a && b;
console.log(result);
// ->&& trả về falsy đầu tiên và truthy cuối cùng

a = null;
b = "Hello";
result = a || b;
console.log(result);
