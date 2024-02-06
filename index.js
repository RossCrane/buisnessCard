const myName = '`Ross Crane`';
const myTitle = '`Fullstack Developer`';
const myEmail = '`dylanrcrane@gmail.com`';
const myLinkedIn = '`dylanrosscrane`';

const frontContent = [
	// Line 1
	{ text: '01', type: 'line-number', indent: 0 },
	{ text: 'this', type: 'function', indent: 0.5 },
	{ text: '.', type: 'operator', indent: 0 },
	{ text: 'addEventListener', type: 'method', indent: 0 },
	{ text: '(', type: 'scope', indent: 0 },
	{ text: '`mouseover`', type: 'string', indent: 0 },
	{ text: ',', type: 'end-line', indent: 0 },
	{ text: ' () ', type: 'scope-inner', indent: 0 },
	{ text: '=>', type: 'operator', indent: 0 },
	{ text: ' {', type: 'scope-inner', indent: 0 },
	{ type: 'break' },

	// Line 2
	{ text: '02', type: 'line-number', indent: 0 },
	{ text: 'this', type: 'function', indent: 1.5 },
	{ text: '.', type: 'operator', indent: 0 },
	{ text: 'flipCard', type: 'text', indent: 0 },
	{ text: ' = ', type: 'operator', indent: 0 },
	{ text: 'true', type: 'boolean', indent: 0 },
	{ text: ';', type: 'end-line', indent: 0 },
	{ type: 'break' },

	// Line 3
	{ text: '03', type: 'line-number', indent: 0 },
	{ text: '}', type: 'scope-inner', indent: 0.5 },
	{ text: ')', type: 'scope', indent: 0 },
	{ text: ';', type: 'end-line', indent: 0 },
	{ type: 'break' },

	// Line 4
	{ text: '04', type: 'line-number', indent: 0 },
];

const backContent = [
	// Line 1
	{ text: '01', type: 'line-number', indent: 0 },
	{ text: 'class ', type: 'variable', indent: 0.5 },
	{ text: 'Me ', type: 'function', indent: 0 },
	{ text: '{', type: 'scope', indent: 0 },
	{ type: 'break' },

	// Line 2
	{ text: '02', type: 'line-number', indent: 0 },
	{ text: 'constructor', type: 'variable', indent: 1.5 },
	{ text: '()', type: 'scope-inner', indent: 0 },
	{ text: ' {', type: 'scope-inner', indent: 0 },
	{ type: 'break' },

	// Line 3
	{ text: '03', type: 'line-number', indent: 0 },
	{ text: 'this', type: 'function', indent: 2.5 },
	{ text: '.', type: 'operator', indent: 0 },
	{ text: 'name', type: 'property', indent: 0 },
	{ text: ' = ', type: 'operator', indent: 0 },
	{ text: `${myName}`, type: 'string', indent: 0 },
	{ text: ';', type: 'end-line', indent: 0 },
	{ type: 'break' },

	// Line 4
	{ text: '04', type: 'line-number', indent: 0 },
	{ text: 'this', type: 'function', indent: 2.5 },
	{ text: '.', type: 'operator', indent: 0 },
	{ text: 'title', type: 'property', indent: 0 },
	{ text: ' = ', type: 'operator', indent: 0 },
	{ text: `${myTitle}`, type: 'string', indent: 0 },
	{ text: ';', type: 'end-line', indent: 0 },
	{ type: 'break' },

	// Line 5
	{ text: '05', type: 'line-number', indent: 0 },
	{ text: 'this', type: 'function', indent: 2.5 },
	{ text: '.', type: 'operator', indent: 0 },
	{ text: 'contact', type: 'property', indent: 0 },
	{ text: ' = ', type: 'operator', indent: 0 },
	{ text: '{', type: 'scope-inner-2', indent: 0 },
	{ type: 'break' },

	// Line 6
	{ text: '06', type: 'line-number', indent: 0 },
	{ text: 'email', type: 'property', indent: 3.5 },
	{ text: ': ', type: 'line-end', indent: 0 },
	{ text: `${myEmail}`, type: 'string', indent: 0 },
	{ text: ',', type: 'end-line', indent: 0 },
	{ type: 'break' },

	// Line 7
	{ text: '07', type: 'line-number', indent: 0 },
	{ text: 'linkedIn', type: 'property', indent: 3.5 },
	{ text: ': ', type: 'line-end', indent: 0 },
	{ text: `${myLinkedIn}`, type: 'string', indent: 0 },
	{ text: ',', type: 'end-line', indent: 0 },
	{ type: 'break' },

	// Line 8
	{ text: '08', type: 'line-number', indent: 0 },
	{ text: '}', type: 'scope-inner-2', indent: 2.5 },
	{ type: 'break' },

	// Line 9
	{ text: '09', type: 'line-number', indent: 0 },
	{ text: '}', type: 'scope-inner', indent: 1.5 },
	{ type: 'break' },

	// Line 10
	{ text: '10', type: 'line-number', indent: 0 },
	{ text: '}', type: 'scope', indent: 0.5 },
	{ type: 'break' },

	// Line 11
	// in the future I want to make this scrollable and add methods to the object that do things on th page
];

const clickContent = [
	// Line 1
	{ text: '01', type: 'line-number', indent: 0 },
	{ text: 'class ', type: 'variable', indent: 0.5 },
	{ text: 'Me ', type: 'function', indent: 0 },
	{ text: '{', type: 'scope', indent: 0 },
	{ type: 'break' },

	// Line 2
	{ text: '02', type: 'line-number', indent: 0 },
	{ text: 'constructor', type: 'variable', indent: 1.5 },
	{ text: '()', type: 'scope-inner', indent: 0 },
	{ text: ' {', type: 'scope-inner', indent: 0 },
	{ type: 'break' },
];

function generateCodeHTML(targetSelector, content) {
	const codeBlock = document.querySelector(targetSelector);
	codeBlock.innerHTML = '';

	content.forEach((item) => {
		if (item.type === 'break') {
			codeBlock.appendChild(document.createElement('br'));
		} else {
			const span = document.createElement('span');
			let indentSpaces = item.indent ? '&nbsp;'.repeat(item.indent * 4) : '';
			span.innerHTML = indentSpaces + item.text;
			span.classList.add(item.type);
			codeBlock.appendChild(span);
		}
	});
}

function applyTypewriterEffect(targetSelector) {
	const spans = document.querySelectorAll(`${targetSelector} > span`);
	let delay = 0;
	const typingSpeed = 35;

	spans.forEach((span) => {
		if (span.classList.contains('break')) {
			return;
		}
		const text = span.textContent;
		span.textContent = '';
		span.style.visibility = 'visible';

		text.split('').forEach((char, index) => {
			setTimeout(() => {
				span.textContent += char;
			}, delay + index * typingSpeed);
		});

		delay += text.length * typingSpeed;
	});
}

document.addEventListener('DOMContentLoaded', () => {
	generateCodeHTML('.card-front code', frontContent);
	applyTypewriterEffect('.card-front code');
});

let backContentGenerated = false;

document.querySelector('.card-back').addEventListener('animationend', () => {
	if (!backContentGenerated) {
		generateCodeHTML('.card-back code', backContent);
		applyTypewriterEffect('.card-back code');
		backContentGenerated = true;
	}
});
