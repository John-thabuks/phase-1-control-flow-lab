function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400){
    return 'This one is on me!'
  } else if(someValue >2000 && someValue < 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(someValue){
  // Write your code here!
  if(someValue === 'NYC'){
    return 'Ok, sounds good.'
  } else{
    return "No go."
  }
}

function switchOnCharmFromTip(someValue){
  // Write your code here!

  switch(someValue){
    case 'generous':
      return "Thank you so much.";

    case 'not as generous':
      return "Thank you." 

    default:
      return "Bye.";

  }

}