import { Question } from 'types';

const BLANK_FORMAT = '___';

/*

export type QuestionType =
	| 'multiple-choice'
	| 'short-answer'
	| 'true-false'
	| 'fill-in-the-blank'
	| 'coding-challenge';

export interface Question {
	id: string;
	questionType: QuestionType;
	questionText: string;
}

*/

export const questionsSet: Question[] = [
	{
		id: '1',
		questionType: 'multiple-choice',
		questionText: 'What is CSS short for?',
		falseAnswers: [
			'Curly Syntax System',
			'Computer Science Solutions',
			'Creative Style Sheets',
			'Colorful Style Syntax',
		],
		correctAnswer: 'Cascading Style Sheets',
		skills: [
			{
				name: 'CSS',
				level: 1,
			},
		],
		tags: ['CSS'],
	},
	{
		id: '2',
		questionType: 'short-answer',
		questionText: 'What is CSS main purpose?',
		possibleAnswers: [
			'To style HTML documents',
			'To define the layout of web pages',
			'To add interactivity to web pages',
		],
		skills: [
			{
				name: 'CSS',
				level: 1,
			},
		],
		tags: ['CSS'],
	},
	{
		id: '3',
		questionType: 'true-false',
		questionText: 'HTML stands for Hypertext Markup Language.',
		isCorrect: true,
		skills: [
			{
				name: 'HTML',
				level: 1,
			},
		],
		tags: ['HTML'],
	},
	{
		id: '4',
		questionType: 'true-false',
		questionText: 'CSS stands for Cascading Style Sheets.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 1,
			},
		],
		tags: ['CSS'],
	},
	{
		id: '5',
		questionType: 'true-false',
		questionText:
			'JavaScript is a programming language that is used to add interactivity to websites.',
		isCorrect: true,
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript'],
	},
	{
		id: '6',
		questionType: 'true-false',
		questionText:
			' jQuery is a JavaScript library that is used to make it easier to use JavaScript on websites.',
		isCorrect: true,
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
			{
				name: 'jQuery',
				level: 1,
			},
		],
		tags: ['JavaScript', 'jQuery'],
	},
	{
		id: '7',
		questionType: 'true-false',
		questionText:
			'The box model is a way of understanding how elements in HTML are displayed on a web page, including the padding, border, and margin.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 1,
			},
		],
		tags: [
			'CSS',
			'CSS Box Model',
			'HTML',
			'CSS Padding',
			'CSS Margin',
			'CSS Border',
		],
	},
	{
		id: '8',
		questionType: 'true-false',
		questionText:
			'Responsive design is a way of designing websites that allows them to be viewed on a variety of devices with different screen sizes.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 1,
			},
		],
		tags: ['CSS', 'Responsive Design'],
	},
	{
		id: '9',
		questionType: 'true-false',
		questionText:
			'AJAX stands for Asynchronous JavaScript and XML and is used to load data asynchronously from a server without reloading the page.',
		isCorrect: true,
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'AJAX'],
	},
	{
		id: '10',
		questionType: 'true-false',
		questionText:
			'A DOM, or Document Object Model, is a tree-like structure that represents the structure of an HTML document.',
		isCorrect: true,
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'DOM', 'HTML'],
	},
	{
		id: '11',
		questionType: 'true-false',
		questionText:
			'The display property in CSS can be used to hide an element from view without removing it from the HTML document.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Display', 'HTML'],
	},
	{
		id: '12',
		questionType: 'true-false',
		questionText:
			'The position property in CSS can be used to specify the position of an element relative to its parent element.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Position', 'HTML'],
	},
	{
		id: '13',
		questionType: 'true-false',
		questionText:
			'The float property in CSS can be used to specify how an element should float within its parent element.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Float', 'HTML'],
	},
	{
		id: '14',
		questionType: 'true-false',
		questionText:
			'The flexbox layout mode in CSS allows for easy alignment of elements in a container and responsive resizing of elements.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Flexbox', 'HTML'],
	},
	{
		id: '15',
		questionType: 'true-false',
		questionText:
			'The grid layout mode in CSS allows for easy positioning of elements within a container, but does not allow for responsive resizing of elements.',
		isCorrect: false,
		correctAnswer:
			'The grid layout mode allows for both easy positioning and responsive resizing of elements.',
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Grid', 'HTML'],
	},
	{
		id: '16',
		questionType: 'true-false',
		questionText:
			'The transition property in CSS allows for smooth changes in the values of CSS properties over a specified duration of time.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Transition', 'HTML'],
	},
	{
		id: '17',
		questionType: 'true-false',
		questionText:
			'The @media rule in CSS allows for the application of different styles based on the dimensions of the viewport.',
		isCorrect: true,
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Media Queries', 'HTML'],
	},
	{
		id: '18',
		questionType: 'true-false',
		questionText:
			'The requestAnimationFrame() method in JavaScript is used to cancel a previously scheduled animation frame callback.',
		isCorrect: false,
		correctAnswer:
			'The cancelAnimationFrame() method is used to cancel a previously scheduled animation frame callback.',
		skills: [
			{
				name: 'JavaScript',
				level: 2,
			},
		],
		tags: ['JavaScript', 'requestAnimationFrame', 'cancelAnimationFrame'],
	},
	{
		id: '19',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} property in CSS can be used to specify how an element should be displayed on the web page, such as as a block or inline element.`,
		correctAnswers: ['display'],
		falseAnswers: ['position', 'float', 'margin'],
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Properties'],
	},
	{
		id: '20',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} layout mode in CSS allows for easy alignment of elements in a container and responsive resizing of elements.`,
		correctAnswers: ['flexbox'],
		falseAnswers: ['grid', 'display', 'position'],
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Properties'],
	},
	{
		id: '21',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} property in CSS allows for smooth changes in the values of CSS properties over a specified duration of time.`,
		correctAnswers: ['transition'],
		falseAnswers: ['animation', 'transform', 'filter'],
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Properties'],
	},
	{
		id: '22',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} rule in CSS allows for the application of different styles based on the dimensions of the viewport.`,
		correctAnswers: ['@media'],
		falseAnswers: ['@viewport', '@screen', '@window'],
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Properties'],
	},
	{
		id: '23',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} method in JavaScript is used to schedule a callback function to be invoked before the next repaint.`,
		correctAnswers: ['requestAnimationFrame'],
		falseAnswers: ['requestRefresh', 'scheduleRefresh', 'requestUpdate'],
		skills: [
			{
				name: 'JavaScript',
				level: 2,
			},
		],
		tags: ['JavaScript', 'requestAnimationFrame', 'cancelAnimationFrame'],
	},
	{
		id: '24',
		questionType: 'coding-challenge',
		questionText: 'Write a function that returns the sum of two numbers.',
		correctAnswer: 'function add(a, b) { return a + b; }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '25',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} property in CSS can be used to specify how an element should be displayed on the web page,
        such as as a block or inline element. It can also be used to hide an element from view without removing it from the HTML document.
        Some possible values for this property include ${BLANK_FORMAT}, ${BLANK_FORMAT}, and ${BLANK_FORMAT}.`,
		correctAnswers: ['display', 'block', 'inline', 'none'],
		falseAnswers: [
			'layout',
			'arrangement',
			'presentation',
			'hidden',
			'invisible',
		],
		skills: [
			{
				name: 'CSS',
				level: 2,
			},
		],
		tags: ['CSS', 'CSS Properties'],
	},
	{
		id: '26',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} method in JavaScript is used to schedule a callback function to be invoked before the next repaint.
        It allows you to create smooth animations by repeatedly scheduling new frames and making small changes to the DOM or CSS properties between each frame.
        To cancel a previously scheduled animation frame callback, you can use the ${BLANK_FORMAT} method.`,
		correctAnswers: ['requestAnimationFrame', 'cancelAnimationFrame'],
		falseAnswers: [
			'scheduleAnimation',
			'cancelAnimation',
			'requestRepaint',
			'cancelRepaint',
		],
		skills: [
			{
				name: 'JavaScript',
				level: 2,
			},
		],
		tags: ['JavaScript'],
	},
	{
		id: '27',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} function in JavaScript is used to parse a string and return a JavaScript value or object.
        It can parse JSON strings, as well as other types of strings such as numbers, booleans, and null.
        To serialize a JavaScript value or object into a JSON string, you can use the ${BLANK_FORMAT} function.`,
		correctAnswers: ['JSON.parse', 'JSON.stringify'],
		falseAnswers: [
			'parseJSON',
			'stringifyJSON',
			'parseValue',
			'stringifyValue',
		],
		skills: [
			{
				name: 'JavaScript',
				level: 2,
			},
		],
		tags: ['JavaScript', 'JSON'],
	},
	{
		id: '28',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} function in JavaScript is used to create a new DOM element with a specified tag name and optional attributes and content.
        To append the new element to a parent element, you can use the ${BLANK_FORMAT} method on the parent element.`,
		correctAnswers: ['document.createElement', 'appendChild'],
		falseAnswers: [
			'createNode',
			'appendNode',
			'createElement',
			'appendElement',
		],
		skills: [
			{
				name: 'JavaScript',
				level: 2,
			},
		],
		tags: ['JavaScript', 'DOM'],
	},
	{
		id: '29',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} function in JavaScript is used to attach an event listener to an element.
        It takes two arguments: the ${BLANK_FORMAT} of the event to listen for, and a ${BLANK_FORMAT} function that will be invoked when the event occurs.
        To remove an event listener, you can use the ${BLANK_FORMAT} function.`,
		correctAnswers: [
			'addEventListener',
			'type',
			'listener',
			'removeEventListener',
		],
		falseAnswers: ['on', 'event', 'callback', 'off'],
		skills: [
			{
				name: 'JavaScript',
				level: 2,
			},
		],

		tags: ['JavaScript', 'DOM', 'JavaScript Events'],
	},
	{
		id: '30',
		questionType: 'fill-in-the-blank',
		questionText: `The ${BLANK_FORMAT} function in JavaScript is used to create a new ${BLANK_FORMAT} object that represents a regular expression.
        It takes a ${BLANK_FORMAT} pattern as an argument and an optional ${BLANK_FORMAT} flag that specifies whether the pattern should be case-insensitive and/or global.
        To test whether a string matches the regular expression, you can use the ${BLANK_FORMAT} method on the regular expression object.`,
		correctAnswers: [
			'RegExp',
			'regular expression',
			'pattern',
			'flags',
			'test',
		],
		falseAnswers: ['regex', 'regexp', 'match', 'matches'],
		skills: [
			{
				name: 'JavaScript',
				level: 2,
			},
		],
		tags: ['JavaScript', 'Regular Expressions'],
	},
	{
		id: '31',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new object in JavaScript using an object literal?',
		correctAnswer: 'const obj = {};',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Objects'],
	},
	{
		id: '32',
		questionType: 'coding-challenge',
		questionText: 'How do you add a property to an object in JavaScript?',
		correctAnswer: 'obj.property = value;',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Objects'],
	},
	{
		id: '33',
		questionType: 'coding-challenge',
		questionText: 'How do you create a new function in JavaScript?',
		correctAnswer: 'function functionName() {}',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '34',
		questionType: 'coding-challenge',
		questionText:
			'How do you define a new class in JavaScript using the class syntax?',
		correctAnswer: 'class ClassName {}',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Classes'],
	},
	{
		id: '35',
		questionType: 'coding-challenge',
		questionText: 'How do you create a new instance of a class in JavaScript?',
		correctAnswer: 'const instance = new ClassName();',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Classes'],
	},
	{
		id: '36',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new array in JavaScript using an array literal?',
		correctAnswer: 'const arr = [];',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Arrays'],
	},
	{
		id: '37',
		questionType: 'coding-challenge',
		questionText:
			'How do you add an element to the end of an array in JavaScript?',
		correctAnswer: 'arr.push(element);',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Arrays'],
	},
	{
		id: '38',
		questionType: 'coding-challenge',
		questionText:
			'How do you loop through the elements of an array in JavaScript using a for loop?',
		correctAnswer: 'for (let i = 0; i < arr.length; i++) {}',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Arrays', 'Loops'],
	},
	{
		id: '39',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new Set object in JavaScript that stores unique values?',
		correctAnswer: 'const set = new Set();',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Sets'],
	},
	{
		id: '40',
		questionType: 'coding-challenge',
		questionText: 'How do you add a value to a Set object in JavaScript?',
		correctAnswer: 'set.add(value);',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Sets'],
	},
	{
		id: '41',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new promise in JavaScript that resolves or rejects asynchronously?',
		correctAnswer: 'const promise = new Promise((resolve, reject) => {});',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Promises'],
	},
	{
		id: '42',
		questionType: 'coding-challenge',
		questionText:
			'How do you consume a promise in JavaScript by registering a success and failure callback using the then and catch methods?',
		correctAnswer: 'promise.then(successCallback).catch(failureCallback);',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Promises'],
	},
	{
		id: '43',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new Map object in JavaScript that stores key-value pairs?',
		correctAnswer: 'const map = new Map();',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Maps'],
	},
	{
		id: '44',
		questionType: 'coding-challenge',
		questionText:
			'How do you add a key-value pair to a Map object in JavaScript?',
		correctAnswer: 'map.set(key, value);',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Maps'],
	},
	{
		id: '45',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new WeakMap object in JavaScript that stores key-value pairs?',
		correctAnswer: 'const weakMap = new WeakMap();',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'WeakMaps'],
	},
	{
		id: '46',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new WeakSet object in JavaScript that stores unique values?',
		correctAnswer: 'const weakSet = new WeakSet();',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'WeakSets'],
	},
	{
		id: '47',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new async function in JavaScript that returns a promise?',
		correctAnswer: 'async function asyncFunction() {}',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Async Functions'],
	},
	{
		id: '48',
		questionType: 'coding-challenge',
		questionText:
			'How do you use the await operator in an async function to wait for the resolution or rejection of a promise?',
		correctAnswer: 'const result = await promise;',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Async Functions', 'Promises'],
	},
	{
		id: '49',
		questionType: 'coding-challenge',
		questionText: 'How do you create a new generator function in JavaScript?',
		correctAnswer: 'function* generatorFunction() {}',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Generators'],
	},
	{
		id: '50',
		questionType: 'coding-challenge',
		questionText:
			'How do you create a new generator function in JavaScript that returns an iterable object?',
		correctAnswer: 'function* generatorFunction() { yield value; }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Generators'],
	},
	{
		id: '51',
		questionType: 'coding-challenge',
		questionText: 'Write a function that returns the maximum of two numbers.',
		correctAnswer: 'function max(a, b) { return a > b ? a : b; }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '52',
		questionType: 'coding-challenge',
		questionText: 'Write a function that returns the maximum of three numbers.',
		correctAnswer:
			'function max(a, b, c) { return a > b ? (a > c ? a : c) : (b > c ? b : c); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '53',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns true if a number is even and false if it is odd.',
		correctAnswer: 'function isEven(a) { return a % 2 === 0; }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '54',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that sorts an array of numbers in ascending order.',
		correctAnswer:
			'function sortAscending(a) { return a.sort((a, b) => a - b); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '55',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that sorts an array of numbers in descending order.',
		correctAnswer:
			'function sortDescending(a) { return a.sort((a, b) => b - a); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '56',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the sum of all numbers in an array.',
		correctAnswer: 'function sum(a) { return a.reduce((a, b) => a + b, 0); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '57',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the average of all numbers in an array.',
		correctAnswer:
			'function average(a) { return a.reduce((a, b) => a + b, 0) / a.length; }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '58',
		questionType: 'coding-challenge',
		questionText: 'Write a function that returns the factorial of a number.',
		correctAnswer:
			'function factorial(a) { return a === 0 ? 1 : a * factorial(a - 1); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '59',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the first n elements of an array.',
		correctAnswer: 'function first(a, n) { return a.slice(0, n); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '60',
		questionType: 'coding-challenge',

		questionText:
			'Write a function that returns the last n elements of an array.',
		correctAnswer: 'function last(a, n) { return a.slice(-n); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '61',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the elements on odd positions in an array.',
		correctAnswer:
			'function odd(a) { return a.filter((_, i) => i % 2 === 1); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '62',
		questionType: 'coding-challenge',

		questionText:
			'Write a function that returns the elements on even positions in an array.',
		correctAnswer:
			'function even(a) { return a.filter((_, i) => i % 2 === 0); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '63',
		questionType: 'coding-challenge',
		questionText: 'Write a function that concatenates two arrays.',
		correctAnswer: 'function concat(a, b) { return a.concat(b); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '64',
		questionType: 'coding-challenge',
		questionText: 'Write a function that returns the union of two arrays.',
		correctAnswer:
			'function union(a, b) { return a.concat(b.filter((x) => !a.includes(x))); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '65',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the intersection of two arrays.',
		correctAnswer:
			'function intersection(a, b) { return a.filter((x) => b.includes(x)); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '66',
		questionType: 'coding-challenge',

		questionText: 'Write a function that returns the difference of two arrays.',
		correctAnswer:
			'function difference(a, b) { return a.filter((x) => !b.includes(x)); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '67',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the symmetric difference of two arrays.',
		correctAnswer:
			'function symmetricDifference(a, b) { return a.filter((x) => !b.includes(x)).concat(b.filter((x) => !a.includes(x))); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '68',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the number of elements in an array.',
		correctAnswer: 'function count(a) { return a.length; }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},

	{
		id: '69',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the minimum value in an array.',
		correctAnswer: 'function min(a) { return Math.min(...a); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
	{
		id: '70',
		questionType: 'coding-challenge',
		questionText:
			'Write a function that returns the maximum value in an array.',
		correctAnswer: 'function max(a) { return Math.max(...a); }',
		skills: [
			{
				name: 'JavaScript',
				level: 1,
			},
		],
		tags: ['JavaScript', 'Functions'],
	},
];
