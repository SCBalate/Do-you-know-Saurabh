var readlineSync=require("readline-sync");
const chalk = require('chalk');
 
console.log(chalk.blue('Hello buddy!'));
var score=0;
var userName=readlineSync.question("what is your name? ");
console.log("welcome " + userName + " Do you know Saurabh ?");
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("right!");
    score=score+1;
  }else{
console.log("wrong!");
score=score-1;

  }
}
console.log('your score is',score);
console.log("----------");
var questions=[{
  question:"what is my nickname? ",
  answer:"bablu"
},
{
  question:"what is my college name? ",
answer:"prec"
},{
question:"what is my stream ",
answer:"i.t."
}
,{
question:"whats my age ",
answer:"22"
}
,{
question:"my best friends names ",
answer:"rushi and shubham"
}
,{
question:"my favourite bike ",
answer:"hayabusa"
}
];
 for(var i=0;i<questions.length;i++) {
   var currentQuestion=questions[i];
   play (currentQuestion.question,currentQuestion.answer);
 }
console.log("Wow ! your score is",score);
