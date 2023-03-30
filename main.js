const answers = [
	"No",
	"Ask again later",
	"Reply hazy try again",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
];

function randomAnswer()
{
	let index = Math.floor(Math.random() * answers.length);
	return answers[index];
}

function transitionEnded(event)
{
	if (!event.propertyName === 'opacity' || event.elapsedTime < 1.05)
		return;

	let polyhedron = event.target;
	let answer = polyhedron.querySelector('#answer');
	answer.innerText = randomAnswer();
}

window.addEventListener('load', event => {
	document.getElementById('polyhedron').addEventListener('transitionend', transitionEnded);
	document.body.addEventListener('touchstart', event => { });
});