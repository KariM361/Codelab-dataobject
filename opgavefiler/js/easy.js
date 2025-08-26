/* opgave 1 */
console.group("opgave 1");
const person ={
    name:"kari",
    age:43,
    job:"studerende"
};
console.groupEnd(person);

/* opgave 2 */
console.group("opgave 2");
 console.log(person.name);"Kari"
                console.log(person.job);"Kari er studerende"          

console.groupEnd();

/* opgave 3 */
console.group("opgave 3");

delete person.age;

console.log(person)

console.groupEnd();
