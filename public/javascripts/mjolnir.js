function test(){
  var answers = colect();

  //answers = [7,6,10,11,12,4,18,17,14,3,1,15,2,13,9,16,8,5,2,8,15,13,14,4,12,17,16,6,1,18,7,10,5,11,9,3];
  var result = evaluate(answers);

  render(result);
}

function colect(){
  var answers = [];
  var answer = '';
  
  for(i=0; i<36; i++){
    input = "q" + (i+1);
    answer = document.getElementById(input).value;
    answers.push(parseInt(answer));
  }
  return(answers);
}

function evaluate(answers){
  var key = [2, 4, 10, 9, 12, 7, 18,	16, 13, 11, 1, 17, 3,14,	8,	15,	6,	5,	1,	7,	16,	15,	13,	3, 17, 12, 11, 9, 2, 18, 4, 10,	5, 14, 6, 8];
  var stdDev = [2.3, 2.0, 2.8, 3.2, 3.2, 10.3, 1.9, 2.4, 3.3, 4.0, 3.4, 2.4, 1.9, 2.7, 3.0, 2.8, 2.9, 3.1, 2.5, 2.8, 3.5, 2.7, 2.9, 2.8, 3.1, 2.6, 2.6, 3.0, 2.4, 3.0, 2.8, 2.8, 2.8, 2.8, 2.6, 2.7];
  
  var ansEv = 0;
  var shittyFactor = 0;

  for(i=0; i<answers.length;i++){
    ansEv = parseFloat((Math.abs((answers[i]-key[i]))/stdDev[i]));
    shittyFactor += ansEv;
  }
  return(shittyFactor);
}

function render(score){
  score = Math.round(score * 100) / 100;
  var rating = ""; 
  var risk = 100 / (80-score);
  risk = Math.round(risk * 100) / 100

  if(score<19.85){
    rating = "great";
  } else if(score<30.23){
    rating = "approved";
  } else if(score<35.34){
    rating = "maybe";
  } else {
    rating = "nope";
  }

  document.getElementById("rating").innerHTML = rating;
  document.getElementById("rating").className += rating;
  document.getElementById("score").innerHTML = "Factor de desconfianza " + score;
  document.getElementById("risk").innerHTML = "Tiene una posibilidad del <b>" + risk + "%</b> de cometer una falta grave.";


}