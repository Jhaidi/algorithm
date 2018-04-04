function Person (name, age, test) {
    this.name = name;
    this.age = age;
    this.say = say;
}
function say(word) {
    console.log(`i am ${this.name},age:${this.age},${word}`);
}

let testPerson = new Person('jinhaidi','23','surperMan');
console.log(testPerson.name);
console.log(testPerson.age);
testPerson.say('i am a surperMan');
let arr = [1,2,3,31]
arr.map(item=>{
    console.log(item)
})
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}