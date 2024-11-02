let a = "hi";
let b = "Hello";
let result = a && b;
console.log(result);
// ->&& trả về falsy đầu tiên và truthy cuối cùng

a = null;
b = "Hello";
result = a || b;
console.log(result);
// || ngược lại với && trả về truthy đầu tiên và falsy cuối cùng
