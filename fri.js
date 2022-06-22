function rpsgame(yourchoice){
  var humanchoice,bortchice;
  humanchoice=yourchoice.id;
  bortchice=numbertochoice(random());
  result =decidewinner(humanchoice,bortchice);
  message=finalmessage(result);
//   console.log(message);

   rpsfrountend(yourchoice.id,bortchice,message);
}
function random(){
   return Math.floor(Math.random()*3);
}
function numbertochoice(number){
    // logic 1:
    return ["rock","paper","sicor"][number];
    // logic 2:
    // if(number==0) return "rock";
    // else if(number==1) return "paper";
    // else return "sicor";
    // logic 3:
    // var sir={
    //     0:"rock",
    //     1:"paper",
    //     2:"sicor"
    // }
    // return sir[number];
    // console.log(sir);
}
function decidewinner(yourchoice,computerchoice){
var database1={
    "rock":{"sicor":1,"rock":0.5,"paper":0},
    "paper":{"rock":1,"paper":0.5,"sicor":0},
    "sicor":{"paper":1,"sicor":0.5,"rock":0},
};
var yourscore = database1[yourchoice][computerchoice];
var computerscore = database1[computerchoice][yourchoice];
// logic 1:
return [yourchoice,computerscore];
// logic 2:
// return yourscore;
}
function finalmessage([yourscore,computerscore]){
    if(yourscore===0){
        return {'message':'you lost!','color':'red'        };
    }
    else if(yourscore===0.5){
        return {'message':'you tied!','color':'yellow'        };
    }
    else{
        return {'message':'you win!','color':'green'        }; 
    }

}
function rpsfrountend(humanimagechoice,botimagechoice,finalmessage) {
var database2 = {
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'sicor':document.getElementById('sicor').src
}
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('sicor').remove();
var humandiv= document.createElement('div');
var botdiv= document.createElement('div');
var messagediv=document.createElement('div');
humandiv.innerHTML="<img src='"+ database2[humanimagechoice]+"'height=150 width=150 style='  box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
messagediv.innerHTML="<h1 style='color:"+finalmessage['color'] +"; font-size: 60px; padding: 30px; '>"+finalmessage['message']+"</h1>"
botdiv.innerHTML="<img src='"+ database2[botimagechoice]+"'height=150 width=150 style=' box-shadow: 0px 10px 50px rgba(243 ,38 ,24 ,1);'>"
document.getElementById('flex-id').appendChild(humandiv);
document.getElementById('flex-id').appendChild(messagediv);
document.getElementById('flex-id').appendChild(botdiv);

}