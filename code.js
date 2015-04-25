console.log("tinamitrivia")
function showWrongAnswer(){
  document.id('error').set('html', 'Respuesta Incorrecta');
}
function showScore() {
	var score = quizMaker.getScore();

	var el = new Element('h3');
	el.set('html', 'Gracias por jugar');
  document.id('resultado').adopt(el);

	el = new Element('h4');
	el.set('html', 'Puntuacion: ' + score.numCorrectAnswers + ' de ' + score.numQuestions);
  document.id('resultado').adopt(el);

	if(score.incorrectAnswers.length > 0) {
		el = new Element('h4');
		el.set('html', 'Respuestas Incorrectas:');
  	document.id('resultado').adopt(el);

		for(var i=0;i<score.incorrectAnswers.length;i++) {
			var incorrectAnswer = score.incorrectAnswers[i];
			el = new Element('div');
			el.set('html', '<b>' +  incorrectAnswer.questionNumber + ': ' + incorrectAnswer.label + '</b>');
			document.id('resultado').adopt(el);

			el = new Element('div');
			el.set('html', 'Respuesta Correcta : ' + incorrectAnswer.correctAnswer);
		  document.id('resultado').adopt(el);
			el = new Element('div');
			el.set('html', 'Tu Respuesta : ' + incorrectAnswer.userAnswer);
		  document.id('resultado').adopt(el);

		}
	}

}
var preguntas = [
	{
		label : 'What is the capital of Norway ?',
		options : ['Stockholm', 'Oslo', 'Copenhagen'],
		answer : ['Oslo'],
		forceAnswer : true
    },
  {	
		label:"esto es una prueba?", 
		options:["si", "no", "talvez"],
		answer: ["si"],
		forceAnswer: true
	} 
    ]

function showAnswerAlert() {
	document.id('error').set('html', 'Tienes que contestar para seguir jugando');
}
function clearErrorBox() {
  document.id('error').set('html','');
}
var quizMaker = new DG.QuizMaker({
	questions : preguntas,
	el : 'preguntas',
  forceCorrectAnswer:false,
	listeners : {
	'finish' : showScore,
	'missinganswer' : showAnswerAlert,
	'sendanswer' : clearErrorBox,
  'wrongAnswer' : showWrongAnswer
	}
});
quizMaker.start();
