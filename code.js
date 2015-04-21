console.log("test");

$.getJSON('preguntas.json', function(data) {
	        // var output="<div>";
	        for (var i in data.preguntas) {
	            var pregunta =  data.preguntas[i].pregunta;
	        	var respuesta1 = data.preguntas[i].respuesta1;
	        	var respuesta2 = data.preguntas[i].respuesta2;
	        	var respuesta3 = data.preguntas[i].respuesta3;
	        	var respuesta4 = data.preguntas[i].respuesta4;

	        	document.getElementById("placeholder").innerHTML= "<div>" + pregunta + "</div>";
	        	document.getElementById("placeholder").innerHTML= respuesta1;
	        }

	        // output+="</div>";
	        
	  });
 // $(document).ready(function(){
 	// $("div").hide();
    // do { 
    	// var x = 0;
    // 	$("#"+x+"").hide();
    // 	x++;
    // }
    // while( x<1);
    // if (x == 0) {
    // 	for (x+1; x > 9 ;x++) {
    // 		$("#"+x+"").hide();
    // 		x++;
    // 	}
    // }
// }); 