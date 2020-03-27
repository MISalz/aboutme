'use strict'; 

//Name question
var question1 = prompt('What is your name?');
console.log(question1);

//Travel question
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

//SCIFI
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
//Tech
var question4 = prompt('I have grown up with technology my whole life '+question1+' do you have much experience with computers and their programming?');

if(question4.toLowerCase() === 'yes'){
  alert(question1+ ' My dad built and programmed computers, growing up we had tons of equipment all over my house. I learned how to use computers before they were even a common thing to have in households.');
} 
else if(question4.toLowerCase() === 'no'){
  alert(question1+ ' Computers can be tough to learn if you have no desire to learn the intricacies of computing.');
} 
// no answer - bypass yes/no answers
else{ 
    alert(question1+ ' I see this is not a topic your\'re into. Lets learn more about each other');
  }
//Family
var question5 = prompt('Do you have a big family?');
if(question5.toLowerCase() === 'yes'){
  alert(question1+ ' Thats amazing! I have a small family, but I love them. Family get togethers are my favorite thing to do.');
} 
else if (question5.toLowerCase() === 'no'){
  alert(' Me either, I guess that means theres more turkey for seconds during the holidays. amma right?? ' +question1+ ' Holidays can be so stressfull when you have to attend more than one dinner or gathering.');
} 
// no answer - bypass yes/no answers
else{ 
  alert(question1+ ' I guess this is the end of our connection. Im sorry we didnt have more things in common but I enjoyed our interaction.');
}
