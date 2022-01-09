function scuberGreetingForFeet(a){
    let result;
    if ( a <= 400) {
      result = 'This one is on me!';
    }else
       if (a >= 2001, a <= 2500) {
         result = 'I will gladly take your thirty bucks.';
       }else
          if (a >= 2501){
            result = 'No can do.';
    }
    return result;
  }


function ternaryCheckCity(x) {
  return x == 'NYC' ? 'Ok, sounds good.' : 'No go.';
   
  }


function switchOnCharmFromTip(tip){
    
  switch (tip) {
    case 'generous':
      tip = 'Thank you so much.';
      break;
    case 'not as generous':
      tip  = 'Thank you.';
      break;
    default:
      tip = 'Bye.'
      break;
      }
      return tip
}
