class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHello() {
		console.log(`Hello, my name is ${this.lastName}, ${this.firstName} ${this.lastName}`);
	}
}

export default Person;