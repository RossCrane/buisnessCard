this.addEventListener('mouseover', () => {
	this.fetch = true;
});

class Me {
	constructor() {
		this.name = 'Ross Crane';
		this.title = 'Frontend Developer';
		this.contact = {
			email: 'dylanrcrane@gmail.com',
			linkedin: 'dylanrosscrane',
		};
	}

	introduceMyself() {
		return `Hi, I'm ${this.name}, a passionate ${this.title}. I love creating engaging, responsive web applications.`;
	}

	getPortfolioLink() {
		return 'https://myportfolio.com'; // replace with my actual portfolio
	}

	getSkills() {
		return ['HTML', 'CSS', 'JavaScript', 'React']; // skills here
	}

	getContactInfo() {
		return `Contact me via email: ${this.contact.email} or LinkedIn: ${this.contact.linkedin}`;
	}

	sendMessage(message) {
		console.log(`Sending message: ${message}`);
	}
}

this.addEventListener('mouseover', () => {
	this.fetch = true;
});
this.menubar;
