import Person from "./Person";

class Programmer extends Person {
	constructor(firstName, lastName, lang="JavaScript") {
		super(firstName, lastName);
		this.lang = lang;
	}

	work() {
		this.sayHello();
		console.log(`My favourite programming language is ${this.lang}`);
	}
}

export default Programmer;