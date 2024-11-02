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

a = null;
b = "Hello";
result = a ?? b;
console.log(result);
// ->?? trả về giá trị không phải null và undefine đầu tiên,nếu tất cả đều null và undefine thì trả về giá
//bên trái
// --------------------------
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

let text = "";
for (var x in person) {
  console.log(x);
  text += person[x] + " ";
}

console.log("name:" + person.x);
console.log(text);
