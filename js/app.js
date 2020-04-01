'use strict'; 
/*
//1.Name question
var question1 = prompt('What is your name?');
console.log(question1);

//2.Travel question
var question2 = prompt(question1 + ' Do you like to travel');

if(question2.toLowerCase() === 'yes'){
  alert(question1 + ' We have something in common. I love to travel but have only been to my MX and USA.');
} 

else if (question2.toLowerCase() === 'no'){
  alert(question1 + ' Travel is not for everyone. It can be extremely exhausting to travel. I traveled for business for 3 years and it takes a toll on your sleep and personal life.');

} 
// no answer - bypass yes/no answers
else { 
    alert(question1 + ' I know its difficult to get to know each other this way, but i know were going to be friends for a long time');
}

//3.SCIFI
var question3 = prompt('Do you belive in the unexplained?');
if(question3.toLocaleLowerCase() === 'yes'){
  alert(question1+ ' I love science and the mystery of what we dont know...\(insert xfiles theme song here)');
} 
else if(question3.toLocaleLowerCase() === 'no'){
  alert(question1+ ' Technology is a part of science and if you use or enjoy techonology you must like some parts of science');
} 
// no answer - bypass yes/no answers
else{ 
    alert(question1 + ' These are the things that are important to me, to get to know me it will be easier if we could interact a bit more.');
}
//4.movies
var question4 = prompt('Have you seen Empire Records?');
if(question4.toLocaleLowerCase() === 'yes'){
  alert(question1+ ' This is one of my background movies; good music, good actors and great movie quotes. The charcaters are so relatable');
} 
else if(question4.toLocaleLowerCase() === 'no'){
  alert(question1+ ' You\'d have to be a 90\'s kid to remember it');
} 
// no answer - bypass yes/no answers
else{ 
    alert(question1 + ' I recommend this movie if you like to watch underrated movies.');
}

//5.Tech
var question5 = prompt('I have grown up with technology my whole life '+question1+' do you have much experience with computers and their programming?');

if(question5.toLowerCase() === 'yes'){
  alert(question1+ ' My dad built and programmed computers, growing up we had tons of equipment all over my house. I learned how to use computers before they were even a common thing to have in households.');
} 
else if(question5.toLowerCase() === 'no'){
  alert(question1+ ' Computers can be tough to learn if you have no desire to learn the intricacies of computing.');
} 
// no answer - bypass yes/no answers
else{ 
    alert(question1+ ' I see this is not a topic your\'re into. Lets learn more about each other');
  }
//6.Family
var question6 = prompt('Do you have a big family?');
if(question6.toLowerCase() === 'yes'){
  alert(question1+ ' Thats amazing! I have a small family, but I love them. Family get togethers are my favorite thing to do.');
} 
else if (question6.toLowerCase() === 'no'){
  alert(' Me either, I guess that means theres more turkey for seconds during the holidays. amma right?? ' +question1+ ' Holidays can be so stressfull when you have to attend more than one dinner or gathering.');
} 
// no answer - bypass yes/no answers
else { 
  alert(question1+ ' I guess this is the end of our connection. Im sorry we didnt have more things in common but I enjoyed our interaction.');
}*/

//7.years in college
var pets = 2;
var attempts = 4;
var responses = [];

 for (var i = 0; i < attempts; i++);
 console.log(responses[i]);{
   var question7 = prompt('Can you guess how many pets i have?');
  console.log (question7);
  if (parseint(question7) === pets);{
  alert(question1+ 'you are correct I have ' +question7+ ' 2 dogs Avocado \(avo) for short and Yoshi');
} else if (parseint(question7) < pets);{ 
  alert(question1+ ' All creatures need company, guess again!');
} else (parseint(question7) > pets);{
  alert(question1+ ' What? do you think I own a zoo?, guess again!');
} responses++ }