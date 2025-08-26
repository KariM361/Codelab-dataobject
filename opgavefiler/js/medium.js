/* Opgave 1*/
console.group("opgave 1");
const data = {
  items: ["en","to","tre","fire","fem"]  
}
data.items.push("seks")
console.log(data)

console.groupEnd();



/*opgave 2*/
console.group("opgave 2");


data.items.splice("-2","-1")
console.log(data)

console.groupEnd();


/*opgave 3*/
console.group("opgave 3");

let Array = { 
  items:["item1", "item2", "item3", "item4"]
}
data.items[2] = "changed"//fordi to er tre når index starter ved 0.

console.log(data.items);

console.groupEnd();




